(function (global) {
	var TextTransform = function () {
		this.partSizeElem = document.getElementById('part-size');
		this.textElem = document.getElementById('text-container');
		this.logContainer = document.getElementById('log-container');
	};


	TextTransform.prototype.transform = function () {
		var res = [];
		var text = this.textElem.value.split('');
		var textLength = this.textElem.value.length;
		var partCount = Math.ceil(textLength / this.partSizeElem.value);
		var part = 1;
		var separator = '\\';

		while (textLength >= 0) {
			var row = text.splice(0, this.partSizeElem.value);
			res.push('[' + part + separator + partCount + '] ' + row.join(''));
			textLength -= this.partSizeElem.value;
			++part;
		}
		return res;
	};

	TextTransform.prototype.handle = function (event) {
		event.preventDefault();
		var rows = this.transform();
		this.logContainer.innerHTML = rows.join('<br>');

	};


	global.textTransform = new TextTransform();
})(window);
