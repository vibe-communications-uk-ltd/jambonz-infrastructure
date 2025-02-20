module.exports = {
  apps : [
  {
    name: 'jambonz-api-server',
    cwd: '/home/admin/apps/jambonz-api-server',
    script: 'app.js',
    out_file: '/home/admin/.pm2/logs/jambonz-api-server.log',
    err_file: '/home/admin/.pm2/logs/jambonz-api-server.log',
    combine_logs: true,
    instance_var: 'INSTANCE_ID',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      JAMBONES_MYSQL_HOST: '${JAMBONES_MYSQL_HOST}',
      JAMBONES_MYSQL_USER: '${JAMBONES_MYSQL_USER}',
      JAMBONES_MYSQL_PASSWORD: '${JAMBONES_MYSQL_PASSWORD}',
      JAMBONES_MYSQL_DATABASE: 'jambones',
      JAMBONES_MYSQL_CONNECTION_LIMIT: 10,
      JAMBONES_REDIS_HOST: '${JAMBONES_REDIS_HOST}',
      JAMBONES_REDIS_PORT: 6379,
      JAMBONES_LOGLEVEL: 'info',
      JAMBONE_API_VERSION: 'v1',
      HTTP_PORT:  3000
		},
  },
  {
    name: 'sbc-options-handler',
    cwd: '/home/admin/apps/sbc-options-handler',
    script: 'app.js',
    instance_var: 'INSTANCE_ID',
    out_file: '/home/admin/.pm2/logs/jambonz-sbc-options-handler.log',
    err_file: '/home/admin/.pm2/logs/jambonz-sbc-options-handler.log',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      JAMBONES_CLUSTER_ID: '${JAMBONES_CLUSTER_ID}',
      JAMBONES_LOGLEVEL: 'info',
      DRACHTIO_HOST: '127.0.0.1',
      DRACHTIO_PORT: 9022,
      DRACHTIO_SECRET: 'cymru',
      JAMBONES_REDIS_HOST: '${JAMBONES_REDIS_HOST}',
      JAMBONES_REDIS_PORT: 6379,
      ENABLE_METRICS: 1,
      STATS_HOST: '127.0.0.1',
      STATS_PORT: 8125,
      STATS_PROTOCOL: 'tcp',
      STATS_TELEGRAF: 1,
      JAMBONES_NETWORK_CIDR: '${VPC_CIDR}',
    }
  },
  {
    name: 'sbc-call-router',
    cwd: '/home/admin/apps/sbc-call-router',
    script: 'app.js',
    instance_var: 'INSTANCE_ID',
    out_file: '/home/admin/.pm2/logs/jambonz-sbc-call-router.log',
    err_file: '/home/admin/.pm2/logs/jambonz-sbc-call-router.log',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      HTTP_PORT:  4000,
      JAMBONES_INBOUND_ROUTE: '127.0.0.1:4002',
      JAMBONES_OUTBOUND_ROUTE: '127.0.0.1:4003',
      JAMBONZ_TAGGED_INBOUND: 1,
      JAMBONES_NETWORK_CIDR: '${VPC_CIDR}',
		}
  },
  {
    name: 'sbc-registrar',
    cwd: '/home/admin/apps/sbc-registrar',
    script: 'app.js',
    instance_var: 'INSTANCE_ID',
    out_file: '/home/admin/.pm2/logs/jambonz-sbc-registrar.log',
    err_file: '/home/admin/.pm2/logs/jambonz-sbc-registrar.log',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      ENABLE_METRICS: 0,
      JAMBONES_LOGLEVEL: 'info',
      DRACHTIO_HOST: '127.0.0.1',
      DRACHTIO_PORT: 9022,
      DRACHTIO_SECRET: 'cymru',
      JAMBONES_MYSQL_HOST: '${JAMBONES_MYSQL_HOST}',
      JAMBONES_MYSQL_USER: '${JAMBONES_MYSQL_USER}',
      JAMBONES_MYSQL_PASSWORD: '${JAMBONES_MYSQL_PASSWORD}',
      JAMBONES_MYSQL_DATABASE: 'jambones',
      JAMBONES_MYSQL_CONNECTION_LIMIT: 10,
      JAMBONES_REDIS_HOST: '${JAMBONES_REDIS_HOST}',
      JAMBONES_REDIS_PORT: 6379,
		}
  },
  {
    name: 'sbc-outbound',
    cwd: '/home/admin/apps/sbc-outbound',
    script: 'app.js',
    instance_var: 'INSTANCE_ID',
    out_file: '/home/admin/.pm2/logs/jambonz-sbc-outbound.log',
    err_file: '/home/admin/.pm2/logs/jambonz-sbc-outbound.log',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      JAMBONES_LOGLEVEL: 'info',
      JAMBONES_NETWORK_CIDR: '${VPC_CIDR}',
      ENABLE_METRICS: 0,
      DRACHTIO_HOST: '127.0.0.1',
      DRACHTIO_PORT: 9022,
      DRACHTIO_SECRET: 'cymru',
      JAMBONES_RTPENGINES: '${JAMBONES_RTPENGINE_IPS}',
      JAMBONES_MYSQL_HOST: '${JAMBONES_MYSQL_HOST}',
      JAMBONES_MYSQL_USER: '${JAMBONES_MYSQL_USER}',
      JAMBONES_MYSQL_PASSWORD: '${JAMBONES_MYSQL_PASSWORD}',
      JAMBONES_MYSQL_DATABASE: 'jambones',
      JAMBONES_MYSQL_CONNECTION_LIMIT: 10,
      JAMBONES_REDIS_HOST: '${JAMBONES_REDIS_HOST}',
      JAMBONES_REDIS_PORT: 6379,
      MS_TEAMS_FQDN: '${MS_TEAMS_FQDN}'
		}
  },
  {
    name: 'sbc-inbound',
    cwd: '/home/admin/apps/sbc-inbound',
    script: 'app.js',
    instance_var: 'INSTANCE_ID',
    out_file: '/home/admin/.pm2/logs/jambonz-sbc-inbound.log',
    err_file: '/home/admin/.pm2/logs/jambonz-sbc-inbound.log',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      JAMBONES_LOGLEVEL: 'info',
      JAMBONES_NETWORK_CIDR: '${VPC_CIDR}',
      ENABLE_METRICS: 0,
      DRACHTIO_HOST: '127.0.0.1',
      DRACHTIO_PORT: 9022,
      DRACHTIO_SECRET: 'cymru',
      JAMBONES_RTPENGINES: '${JAMBONES_RTPENGINE_IPS}',
      JAMBONES_MYSQL_HOST: '${JAMBONES_MYSQL_HOST}',
      JAMBONES_MYSQL_USER: '${JAMBONES_MYSQL_USER}',
      JAMBONES_MYSQL_PASSWORD: '${JAMBONES_MYSQL_PASSWORD}',
      JAMBONES_MYSQL_DATABASE: 'jambones',
      JAMBONES_MYSQL_CONNECTION_LIMIT: 10,
      JAMBONES_REDIS_HOST: '${JAMBONES_REDIS_HOST}',
      JAMBONES_REDIS_PORT: 6379,
      JAMBONES_CLUSTER_ID: '${JAMBONES_CLUSTER_ID}',
      MS_TEAMS_SIP_PROXY_IPS: '52.114.148.0, 52.114.132.46, 52.114.75.24, 52.114.76.76, 52.114.7.24, 52.114.14.70'
		}
  }]
};