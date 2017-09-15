/**
 * describe 方法用来组织相关的 Spec 集合。string 参数作为 Spec 集合的名字，
 * 会和其中的 Spec 连接组成 Spec 的完整名字。这样在一个大的 suite 中可以更容易找到某个 Spec。
 * 如果给它们命名适当，Specs 读起来是一个典型的 BDD 样式的句子。
 Spec 是作为测试主体，Suite 是一个或多个 Spec 的集合。
 describe 和 it 代码块中都是方法，可以包含任何可执行的代码来实现测试。而方法的内容就是 Suites。
 *
 * */

/**
*  
describe 是 Jasmine 的全局函数，作为一个 Test Suite 的开始，

Specs 通过调用 it 的全局函数来定义。和 describe 类似，it 也是有 2 个参数
，字符串和方法。每个 Spec 包含一个或多个 expectations 来测试需要测试代码。

Jasmine 中的每个 expectation 是一个断言，可以是 true 或者 false。
当每个 Spec 中的所有 expectations 都是 true，则通过测试。
有任何一个 expectation 是 false，则未通过测试。而方法的内容就是测试主体。




*/

/**
* Matchers
 每个 Matchers 实现一个布尔值，在实际值和期望值之间比较。它负责通知 Jasmine，此 expectation 是真或者假。
 然后 Jasmine 会认为相应的 spec 是通过还是失败。
 任何 Matcher 可以在调用此 Matcher 之前用 not 的 expect 调用，计算负值的判断。
 toBe()
 toNotBe()
 toBeDefined()
 toBeUndefined()
 toBeNull()
 toBeTruthy()
 toBeFalsy()
 toBeLessThan()
 toBeGreaterThan()
 toEqual()
 toNotEqual()
 toContain()
 toBeCloseTo()
 toHaveBeenCalled()
 toHaveBeenCalledWith()
 toMatch()
 toNotMatch()
 toThrow()


* */

describe("This is an exmaple suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(false);
    //Expectations 是由方法 expect 来定义，一个值代表实际值。另外的匹配的方法，代表期望值。
    expect(false).toBe(false);
    expect(false).not.toBe(true);
  });
});