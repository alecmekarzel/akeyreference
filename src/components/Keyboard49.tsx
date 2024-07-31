import { saveAs } from 'file-saver'
import * as htmlToImage from 'html-to-image'
import React, { useRef } from 'react'

interface Keyboard49Props {
	name: string
	type: string
	keys: number[]
	fingering: number[]
	numberOfKeys?: number
}

const Keyboard49: React.FC<Keyboard49Props> = (props) => {
	const deviation = 4 // deviation to compensate for library starting on A note for 88 key piano, adapting back to C note
	const adjustedKeys = props.keys.map((item) => item - deviation)
	const keyboardRef = useRef<HTMLDivElement>(null)

	const isKey = (passed: number) => {
		return adjustedKeys.some((item) => item === passed)
	}

	const download = () => {
		const fileName = `${props.name}.png`.replace('/', '-')

		htmlToImage.toBlob(keyboardRef.current).then((blob) => {
			saveAs(blob, fileName)
		})
	}

	let keys = adjustedKeys
	let fingering = props.fingering
	let totalHighlighted = 0
	let repCounter = 0

	const isBlackKey = (repCounter: number) => {
		return [2, 4, 7, 9, 11].some((item) => item === repCounter)
	}

	let totalKeys = props.numberOfKeys || keys[keys.length - 1]
	totalKeys = Math.ceil(totalKeys / 12) * 12
	totalKeys <= 12 ? (totalKeys = 25) : totalKeys // min keys on keyboard
	totalKeys >= 49 ? (totalKeys = 49) : totalKeys // max keys on keyboard

	return (
		<div className="section">
			<div className="info">
				<span className="name">{props.name}</span>
				<span className="type">{props.type}</span>
				<span className="download" onClick={download}>
					⬇
				</span>
			</div>
			<div className="keyboard" ref={keyboardRef}>
				{Array.from({ length: totalKeys }, (_, key) => {
					repCounter++
					if (repCounter === 12) repCounter = 0

					if (isBlackKey(repCounter)) {
						if (isKey(key)) {
							return (
								<div key={key} className="black-key red">
									{keys.indexOf(key) !== -1 ? (
										<span className="number">{fingering[keys.indexOf(key)]}</span>
									) : (
										''
									)}
								</div>
							)
						} else {
							return <div key={key} className="black-key" />
						}
					} else {
						if (isKey(key)) {
							return (
								<div key={key} className="white-key red">
									{keys.indexOf(key) !== -1 ? (
										<span className="number">{fingering[keys.indexOf(key)]}</span>
									) : (
										''
									)}
								</div>
							)
						} else {
							return <div key={key} className="white-key" />
						}
					}
				})}
			</div>
		</div>
	)
}

export default Keyboard49
