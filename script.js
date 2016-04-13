(function (global) {
	var TextTransform = function () {
		this.partSizeElem = document.getElementById('part-size');
		this.textElem = document.getElementById('text-container');
	};

	TextTransform.prototype.handle = function (event) {
		event.preventDefault();
		var text = this.textElem.value.split('');
		var textLength = this.textElem.value.length;
		var res = [];
		var partCount = Math.ceil(textLength / this.partSizeElem.value);
		var part = 1;
		var separator = '\\';
		while (textLength >= 0) {
			var row = text.splice(0, this.partSizeElem.value);
			res.push('[' + part + separator + partCount + ']' + row.join(''));
			textLength -= this.partSizeElem.value;
			++part;
		}
		console.log(res);
	};


	global.textTransform = new TextTransform();
})(window);
