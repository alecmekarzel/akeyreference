import { getScaleKeys } from './lib/utility'

import Keyboard49 from './components/Keyboard49'

import './App.css'

export default function App() {
	return (
		<div>
			<div className="logo">a key reference</div>

			<div className="keyboards">
				<Keyboard49
					type="scale"
					name="C major"
					keys={getScaleKeys('C1', 'major').concat(getScaleKeys('C2', 'major'))}
					fingering={[5, 4, 3, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 3, 4, 5]}
					numberOfKeys={28}
				/>

				<Keyboard49
					type="scale"
					name="C# / Db major"
					keys={getScaleKeys('Db1', 'major').concat(getScaleKeys('Db2', 'major'))}
					fingering={[]}
					numberOfKeys={28}
				/>

				<Keyboard49
					type="scale"
					name="D major"
					keys={getScaleKeys('D1', 'major').concat(getScaleKeys('D2', 'major'))}
					fingering={[]}
					numberOfKeys={28}
				/>

				<Keyboard49
					type="scale"
					name="D# / Eb major"
					keys={getScaleKeys('Eb1', 'major').concat(getScaleKeys('Eb2', 'major'))}
					fingering={[]}
					numberOfKeys={28}
				/>

				<Keyboard49
					type="scale"
					name="E major"
					keys={getScaleKeys('E1', 'major').concat(getScaleKeys('E2', 'major'))}
					fingering={[]}
					numberOfKeys={28}
				/>

				<Keyboard49
					type="scale"
					name="F major"
					keys={getScaleKeys('F1', 'major').concat(getScaleKeys('F2', 'major'))}
					fingering={[]}
					numberOfKeys={28}
				/>

				<Keyboard49
					type="scale"
					name="F# / Gb major"
					keys={getScaleKeys('Gb1', 'major').concat(getScaleKeys('Gb2', 'major'))}
					fingering={[]}
					numberOfKeys={28}
				/>

				<Keyboard49
					type="scale"
					name="G major"
					keys={getScaleKeys('G1', 'major').concat(getScaleKeys('G2', 'major'))}
					fingering={[]}
					numberOfKeys={28}
				/>

				<Keyboard49
					type="scale"
					name="G# / Ab major"
					keys={getScaleKeys('Ab1', 'major').concat(getScaleKeys('Ab2', 'major'))}
					fingering={[]}
					numberOfKeys={28}
				/>

				<Keyboard49
					type="scale"
					name="A major"
					keys={getScaleKeys('A1', 'major').concat(getScaleKeys('A2', 'major'))}
					fingering={[]}
					numberOfKeys={28}
				/>

				<Keyboard49
					type="scale"
					name="A# / Bb major"
					keys={getScaleKeys('Bb1', 'major').concat(getScaleKeys('Bb2', 'major'))}
					fingering={[]}
					numberOfKeys={28}
				/>

				<Keyboard49
					type="scale"
					name="B major"
					keys={getScaleKeys('B1', 'major').concat(getScaleKeys('B2', 'major'))}
					fingering={[]}
					numberOfKeys={28}
				/>
			</div>
		</div>
	)
}
