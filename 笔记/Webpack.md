grunt/gulp的核心是Task
    我们可以配置一系列的task，并且定义task要处理的事务（例如ES6，ts转化，图片压缩，scss转css）
    之后让grunt/gulp来依次执行这些task，而且让整个流程自动化。
    所以grunt/gulp也被成为前端自动化任务管理工具。
    
   下面的task就是将src下面的所有js文件转成ES5的语法。
   并且最终输出到dist文件夹下。
   const gulp = require（'gulp'）;
   const babe1 = require('gulp-babe1');
   
   gulp.task('js',()=>
    gulp.src('src/*.js')
        .pipe(babe1)({
            presets: ['es2015']             
   }))
    .pipe(gulp.dest('dist'))
   );
   
   什么时候使用grunt/gulp呢？
   如果你的工程模块依赖非常简单，甚至是没有用到模块化的概念。
   只需要进行简单的合并、压缩，就使用grunt/gulp即可。
   但是如果整个项目使用了模块化管理，而且互相依赖非常强，我们就可以使用更加强大的webpack了。
   
   grunt/webpack有什么不同呢。
   grunt/gulp更加强调的是前端流程的自动化，模块化不是它的核心。
   webpack更加强调模块化开发管理，而文件压缩合并、预处理等功能，是他附带的功能。
   npn => node packages manager
   
   npn install webpack@3.6.0 -g    @3.6.0指定版本号 -g全局安装
   