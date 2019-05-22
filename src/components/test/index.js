import IcyTest from './src/test';

/* istanbul ignore next */
IcyTest.install = function (Vue) {
  Vue.component(IcyTest.name, IcyTest);
};

export default IcyTest;