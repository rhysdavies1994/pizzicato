describe('Effects.Compressor', function() {


	it('Should override default options', function() {
		var options = {
			threshold: -25,
			knee: 33,
			attack: 0.005,
			release: 0.299
		};

		var compressor = new Pizzicato.Effects.Compressor(options);

		expect(compressor.threshold).toBe(options.threshold);
		expect(compressor.knee).toBe(options.knee);
		expect(compressor.attack).toBeCloseTo(options.attack);
		expect(compressor.release).toBeCloseTo(options.release);
	});


	it('Should change the threshold node values when changing the threshold property', function() {
		var initialThreshold = -30;
		var newThreshold = -60;
		var compressor = new Pizzicato.Effects.Compressor({ threshold: initialThreshold });

		expect(compressor.compressorNode.threshold.value).toBe(initialThreshold);

		compressor.threshold = newThreshold;

		expect(compressor.compressorNode.threshold.value).toBe(newThreshold);
	});


	it('Should change the knee node values when changing the knee property', function() {
		var initialKnee = 20;
		var newKnee = 22;
		var compressor = new Pizzicato.Effects.Compressor({ knee: initialKnee });

		expect(compressor.compressorNode.knee.value).toBe(initialKnee);

		compressor.knee = newKnee;

		expect(compressor.compressorNode.knee.value).toBe(newKnee);
	});


	it('Should change the attack node values when changing the attack property', function() {
		var initialAttack = 0.5;
		var newAttack = 0.004;
		var compressor = new Pizzicato.Effects.Compressor({ attack: initialAttack });

		expect(compressor.compressorNode.attack.value).toBeCloseTo(initialAttack);

		compressor.attack = newAttack;

		expect(compressor.compressorNode.attack.value).toBeCloseTo(newAttack);
	});


	it('Should change the release node values when changing the release property', function() {
		var initialRelease = 0.24;
		var newRelease = 0.4;
		var compressor = new Pizzicato.Effects.Compressor({ release: initialRelease });

		expect(compressor.compressorNode.release.value).toBeCloseTo(initialRelease);

		compressor.release = newRelease;

		expect(compressor.compressorNode.release.value).toBeCloseTo(newRelease);
	});


	it('Should change the ratio node values when changing the ratio property', function() {
		var initialRatio = 3;
		var newRatio = 23;
		var compressor = new Pizzicato.Effects.Compressor({ ratio: initialRatio });

		expect(compressor.compressorNode.ratio.value).toBe(initialRatio);

		compressor.ratio = newRatio;

		expect(compressor.compressorNode.ratio.value).toBe(newRatio);
	});

});