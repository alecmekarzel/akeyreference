Number.prototype.roundUpToNearestSetOf = function(interval) {
	return Math.ceil(this / interval) * interval
}

// Library is shit at naming chords, so unfortunately disabled for now
/* function getChordName(note, quality) {
	var note = teoria.note(note) // currently no error if note is invalid, quality doesn't matter yet
	var key = note.key()
	var chord = note.chord(quality)

	return chord.toString()
} */

export function getScaleKeys(note, quality) {
	var scale = teoria.note(note).scale(quality) // currently no error if note is invalid, quality doesn't matter yet


	var keys = scale.notes().map((note) => {
		return note.key()
	})

	keys.push(keys[0]+12)

	return keys
}

export function getChordKeys(note, quality) {
	var note = teoria.note(note) // currently no error if note is invalid, quality doesn't matter yet
	var key = note.key()
	var chord = note.chord(quality)
	var voicing = chord.voicing()

	// Map over the semitones that make up the chord and
	// add them to the original piano key number for eventual rendering/manipulation on the piano
	var keys = voicing.map((interval) => {
		return interval.semitones() + key
	})

	return keys
}
