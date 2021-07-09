import React from "react"

import { saveAs } from 'file-saver'
import htmlToImage from 'html-to-image'

export default class Keyboard49 extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}

		this.deviation = 4 // deviation to compensate for library starting on A note for 88 key piano, adapting back to C note
		this.adjustedKeys = this.props.keys.map((item) => item - this.deviation)
	}

	isKey(passed) {
		return this.adjustedKeys.some((item) => {
			if (item === passed) return true
			else return false
		})
	}

	download = () => {
		const fileName = `${this.props.name}.png`.replace('/', '-')

		htmlToImage.toBlob(this.refs.keyboard)
		.then((blob) => {
			saveAs(blob, fileName)
		})
	}

	render() {
		var keys = this.adjustedKeys
		var fingering = this.props.fingering
		var totalHighlighted = 0
		var repCounter = 0

		// if (within a set of 12, the key number is equal to of these numbers)
		var isBlackKey = function(repCounter) {
			return [2, 4, 7, 9, 11].some((item) => item === repCounter)
		}

		var totalKeys = this.props.numberOfKeys || keys[keys.length-1]
		totalKeys = totalKeys.roundUpToNearestSetOf(12)
		totalKeys <= 12 ? totalKeys = 25 : totalKeys // min keys on keyboard
		totalKeys >= 49 ? totalKeys = 49 : totalKeys // max keys on keyboard

		return (
			<div className="section">
				<div className="info">
					<span className="name">{this.props.name}</span>
					<span className="type">{this.props.type}</span>
					<span className="download" onClick={this.download}>⬇</span>
				</div>
				<div className="keyboard" ref="keyboard">
					{_.times(totalKeys, (key) => {
						repCounter++
						if (repCounter === 12) repCounter = 0

						if (isBlackKey(repCounter))
							if (this.isKey(key)) {
								return (
									<div key={key} className="black-key red">
										{keys.indexOf(key) !== -1 ? <span className="number">{fingering[keys.indexOf(key)]}</span> : '' }
									</div>
								)
							}
							else return <div key={key} className="black-key"/>
						else {
							if (this.isKey(key)) {
								return (
									<div key={key} className="white-key red">
										{keys.indexOf(key) !== -1 ? <span className="number">{fingering[keys.indexOf(key)]}</span> : '' }
									</div>
								)
							}
							else return <div key={key} className="white-key"/>
						}
					})}
				</div>
			</div>
		)
	}
}
