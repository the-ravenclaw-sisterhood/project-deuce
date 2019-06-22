let config = {
    local: {
        mysql: process.env.DB_URl,
        api_keys: {}
    },

    prod: {
        mysql: {},
        api_keys: {}
    }
};

module.exports = config[process.env.APP_ENV || "LOCAL"];