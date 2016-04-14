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
			var prefix = '[' + part + separator + partCount + '] ';
			var partSize = this.partSizeElem.value - prefix.length;

			if(partSize < 0){
				console.error('part не может быть меньше префикса');
				return;
			}

			var row = text.splice(0, partSize);

			res.push( prefix + row.join(''));
			textLength -= partSize;
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
