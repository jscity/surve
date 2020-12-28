// Developed by Hackl0us (https://github.com/hackl0us)

// STEP 1: 前往 https://aqicn.org/data-platform/token/ 注册账户，将申请的 API Token 填入下方
const aqicnToken = '07f78380-c382-44d2-99d2-27ef730d2992'

// STEP 2: 参考下方配置片段，在代理工具的配置文件中添加对应的配置。注意：script-path 后应该替换为添加 apicnToken 值后的脚本路径
/*
	[Script]
	AQI-US = type=http-response, pattern=https://weather-data.apple.com/v1/weather/[\w-]+/[0-9]+\.[0-9]+/[0-9]+\.[0-9]+\?include=, requires-body=true, script-path=https://raw.githubusercontent.com/jscity/surve/main/AQI.js
