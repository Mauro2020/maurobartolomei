import { execFileSync } from "node:child_process";

const tracked = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], {
  encoding: "utf8",
})
  .split("\0")
  .filter(Boolean);

const forbidden = tracked.filter((file) => {
  const name = file.toLowerCase();

  if (name === ".env.example" || name.endsWith("/.env.example")) {
    return false;
  }

  return (
    name === ".env" ||
    name.includes("/.env") ||
    /\.(?:key|pem|p12|pfx)$/.test(name) ||
    /(?:^|\/)(?:id_rsa|id_ed25519)$/.test(name)
  );
});

if (forbidden.length > 0) {
  console.error("Refusing to continue: secret-like files are tracked:");
  forbidden.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

console.log("No tracked environment files or private-key formats detected.");
