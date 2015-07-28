webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64);


/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Table = __webpack_require__(3);
	__webpack_require__(7);
	
	var data = [];
	for (var i = 0; i < 30; i++) {
	  data.push({
	    key: i,
	    a: 'a' + i,
	    b: 'b' + i,
	    c: 'c' + i
	  });
	}
	
	function getRowKey(record) {
	  return record.key;
	}
	
	var Test = React.createClass({
	  displayName: 'Test',
	
	  getInitialState: function getInitialState() {
	
	    return {
	      showBody: true
	    };
	  },
	
	  toggleBody: function toggleBody() {
	    this.setState({
	      showBody: !this.state.showBody
	    });
	  },
	
	  render: function render() {
	    var columns = [{ title: '表头1', key: 'a', dataIndex: 'a', width: 100 }, { id: '123', title: '表头2', dataIndex: 'b', key: 'b', width: 100 }, { title: '表头3', key: 'c', dataIndex: 'c', width: 200 }, {
	      title: React.createElement(
	        'a',
	        { onClick: this.toggleBody, href: '#' },
	        this.state.showBody ? '隐藏' : '显示',
	        '体'
	      ),
	      key: 'x',
	      width: 200,
	      render: function render() {
	        return React.createElement(
	          'a',
	          { href: "#" },
	          '操作'
	        );
	      }
	    }];
	    return React.createElement(Table, { columns: columns,
	      data: data,
	      useFixedHeader: true,
	      rowKey: getRowKey,
	      bodyStyle: {
	        overflow: 'auto',
	        height: 200,
	        display: this.state.showBody ? '' : 'none'
	      },
	      className: "table" });
	  }
	});
	
	React.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'h2',
	    null,
	    'scroll body table'
	  ),
	  React.createElement(Test, null)
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=scrollBody.js.map