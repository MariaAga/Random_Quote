var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var QuoteBox = function (_React$Component) {_inherits(QuoteBox, _React$Component);
  function QuoteBox(props) {_classCallCheck(this, QuoteBox);var _this = _possibleConstructorReturn(this, (QuoteBox.__proto__ || Object.getPrototypeOf(QuoteBox)).call(this,
    props));_this.




    getQuote = function () {
      axios.
      get(
      'https://gist.githubusercontent.com/MariaAga/c5d3b77980626dfe15a350c73bdd982b/raw/8d9f0e9626b7f856facea271b34572be6000fd64/potter_quotes.json').

      then(function (res) {return res.data;}).
      then(function (res) {
        if (res) {
          var q = res[Math.floor(Math.random() * res.length - 1)];
          console.log(q);
          _this.setState({ quote: q.quote, author: q.author });
        }
      });
    };_this.state = { quote: 'Quote', author: 'Author' };_this.getQuote();return _this;}_createClass(QuoteBox, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: 'quote-box' },
          React.createElement('label', { id: 'text' }, '" ', this.state.quote, ' "'),
          React.createElement('label', { id: 'author' }, '-Said by ', this.state.author),
          React.createElement('div', { 'class': 'quote-footer' },
            React.createElement('span', null,
              React.createElement('button', { id: 'new-quote', onClick: this.getQuote }, ' New Quote ')),

            React.createElement('a', {
                id: 'tweet-quote',
                href: 'https://twitter.com/intent/tweet?text="' +
                this.state.quote + '" -Said by ' +
                this.state.author + ' ' },

              React.createElement('i', { 'class': 'fa fa-twitter fa-10x' })))));




    } }]);return QuoteBox;}(React.Component);


ReactDOM.render(React.createElement(QuoteBox, null), document.getElementById('quote'));