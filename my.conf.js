// Karma configuration
// Generated on Thu Sep 14 2017 15:03:26 GMT+0800 (中国标准时间)
var webpackConfig = require('./webpack.base.conf');
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use ，使用的测试框架
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
      // 测试用例
    files: ['./specs/*.specs.js'],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      //在浏览器执行之前预先处理
    preprocessors: {
        './specs/*.specs.js': ['webpack']
    },
    //指定webpack配置文件， 需要"karma-webpack"（ webpack与karma的连接）
    webpack: webpackConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //报告输出方式
    reporters: ['progress', 'junit'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
      //junit reporter的配置信息
      junitReporter: {
          outputDir: '', // results will be saved as $outputDir/$browserName.xml
          outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
          suite: '', // suite will become the package name attribute in xml testsuite element
          useBrowserName: true, // add browser name to report and classes names
          nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
          classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
          properties: {} // key value pair of properties to add to the <properties> section of the report
      }
  })
}
