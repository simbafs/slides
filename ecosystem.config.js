module.exports = {
	apps : [{
		name: "slides",
		script: "./bin/www",
		watch: true,
		instances: 1,
		env: {
			"NODE_ENV": "development",
		},
		env_production : {
			"NODE_ENV": "production"
		}
	}]
}

