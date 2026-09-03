const appRoot = process.env.BARTOLOMEI_APP_ROOT || "/srv/bartolomeisystems";

module.exports = {
  apps: [
    {
      name: "bartolomeisystems",
      cwd: `${appRoot}/current`,
      script: "node_modules/next/dist/bin/next",
      args: ["start", "--hostname", "0.0.0.0", "--port", "3000"],
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      kill_timeout: 5000,
      restart_delay: 2000,
      max_restarts: 10,
      min_uptime: "10s",
      time: true,
      out_file: `${appRoot}/shared/logs/application-out.log`,
      error_file: `${appRoot}/shared/logs/application-error.log`,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
