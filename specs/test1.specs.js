import MathObj from '../src/interface'

describe('test math class', function() {
   var mobj = new MathObj({a:3, b:2});
   it('add function', function() {
      expect(mobj.add()).toBe(5);
   });
   it('jian function', function() {
      expect(mobj.jian()).toBe(1);
   });
});
