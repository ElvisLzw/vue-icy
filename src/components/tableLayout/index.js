import TableLayout from './src/tableLayout';

/* istanbul ignore next */
TableLayout.install = function (Vue) {
  Vue.component(TableLayout.name, TableLayout);
};

export default TableLayout;