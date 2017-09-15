

/**
*
 为了使某个测试用例干净的重复 setup 和 teardown 代码， Jasmine 提供了全局的 beforeEach 和 afterEach 方法。
 正像其名字一样，beforeEach 方法在 describe 中的
 每个 Spec 执行之前运行，afterEach 在每个 Spec 调用后运行。
 这里的在同一 Spec 集合中的例子有些不同。测试中的变量被定义为全局的 describe 代码块中，
 用来初始化的代码被挪到 beforeEach 方法中。afterEach 方法在继续前重置这些变量。
*/

describe("An example of setup and teardown)", function() {
    var gVar;

    beforeEach(function() {
        gVar = 3.6;
        gVar += 1;
    });

    afterEach(function() {
        gVar = 0;
    });

    it("after setup, gVar has new value.", function() {
        expect(gVar).toEqual(4.6);
    });
    //spec
    it("A spec contains 2 expectations.", function() {
        gVar = 0;
        expect(gVar).toEqual(0);
        expect(true).toEqual(true);
    });
});
