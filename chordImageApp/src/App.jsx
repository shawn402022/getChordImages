import { Instrument } from "piano-chart";
import { useEffect, useRef, useState } from "react";

function App() {
  // Sample chord data
  const chordData = [
    { id: 496, key: 'C', name: 'C5', notes: 'C,G', imageUrl: null },
    { id: 497, key: 'C', name: 'CM7#5sus4', notes: 'C,F,G#,B', imageUrl: null },
    { id: 498, key: 'C', name: 'C7#5sus4', notes: 'C,F,G#,Bb', imageUrl: null },
    { id: 499, key: 'C', name: 'Csus4', notes: 'C,F,G', imageUrl: null },
    { id: 500, key: 'C', name: 'CM7sus4', notes: 'C,F,G,B', imageUrl: null },
    { id: 501, key: 'C', name: 'C7sus4', notes: 'C,F,G,Bb', imageUrl: null },
    { id: 502, key: 'C', name: 'C7no5', notes: 'C,E,Bb', imageUrl: null },
    { id: 503, key: 'C', name: 'Caug', notes: 'C,E,G#', imageUrl: null },
    { id: 504, key: 'C', name: 'CM7b6', notes: 'C,E,Ab,B', imageUrl: null },
    { id: 505, key: 'C', name: 'Cmaj7#5', notes: 'C,E,G#,B', imageUrl: null },
    { id: 506, key: 'C', name: 'C7#5', notes: 'C,E,G#,Bb', imageUrl: null },
    { id: 507, key: 'C', name: 'C7b13', notes: 'C,E,Bb,Ab', imageUrl: null },
    { id: 508, key: 'C', name: 'CM', notes: 'C,E,G', imageUrl: null },
    { id: 509, key: 'C', name: 'Cmaj7', notes: 'C,E,G,B', imageUrl: null },
    { id: 510, key: 'C', name: 'C7', notes: 'C,E,G,Bb', imageUrl: null },
    { id: 511, key: 'C', name: 'C6', notes: 'C,E,G,A', imageUrl: null },
    { id: 512, key: 'C', name: 'C7add6', notes: 'C,E,G,Bb,A', imageUrl: null },
    { id: 513, key: 'C', name: 'C7b6', notes: 'C,E,G,Ab,Bb', imageUrl: null },
    { id: 514, key: 'C', name: 'CMb5', notes: 'C,E,Gb', imageUrl: null },
    { id: 515, key: 'C', name: 'CM7b5', notes: 'C,E,Gb,B', imageUrl: null },
    { id: 516, key: 'C', name: 'C7b5', notes: 'C,E,Gb,Bb', imageUrl: null },
    { id: 517, key: 'C', name: 'Cmaj#4', notes: 'C,E,G,B,F#', imageUrl: null },
    { id: 518, key: 'C', name: 'C7#11', notes: 'C,E,G,Bb,F#', imageUrl: null },
    { id: 519, key: 'C', name: 'CM6#11', notes: 'C,E,G,A,F#', imageUrl: null },
    { id: 520, key: 'C', name: 'C7#11b13', notes: 'C,E,G,Bb,F#,Ab', imageUrl: null },
    { id: 521, key: 'C', name: 'Cm#5', notes: 'C,Eb,G#', imageUrl: null },
    { id: 522, key: 'C', name: 'Cmb6M7', notes: 'C,Eb,Ab,B', imageUrl: null },
    { id: 523, key: 'C', name: 'Cm7#5', notes: 'C,Eb,Ab,Bb', imageUrl: null },
    { id: 524, key: 'C', name: 'Cm', notes: 'C,Eb,G', imageUrl: null },
    { id: 525, key: 'C', name: 'Cm/ma7', notes: 'C,Eb,G,B', imageUrl: null },
    { id: 526, key: 'C', name: 'Cm7', notes: 'C,Eb,G,Bb', imageUrl: null },
    { id: 527, key: 'C', name: 'Cm6', notes: 'C,Eb,G,A', imageUrl: null },
    { id: 528, key: 'C', name: 'CmMaj7b6', notes: 'C,Eb,G,Ab,B', imageUrl: null },
    { id: 529, key: 'C', name: 'Cdim', notes: 'C,Eb,Gb', imageUrl: null },
    { id: 530, key: 'C', name: 'CoM7', notes: 'C,Eb,Gb,B', imageUrl: null },
    { id: 531, key: 'C', name: 'Cm7b5', notes: 'C,Eb,Gb,Bb', imageUrl: null },
    { id: 532, key: 'C', name: 'Cdim7', notes: 'C,Eb,Gb,Bbb', imageUrl: null },
    { id: 533, key: 'C', name: 'Co7M7', notes: 'C,Eb,Gb,A,B', imageUrl: null },
    { id: 534, key: 'C', name: 'C4', notes: 'C,F,Bb,Eb', imageUrl: null },
    { id: 535, key: 'C', name: 'Cmadd4', notes: 'C,Eb,F,G', imageUrl: null },
    { id: 536, key: 'C', name: 'Cm7add11', notes: 'C,Eb,G,Bb,F', imageUrl: null },
    { id: 537, key: 'C', name: 'C+add#9', notes: 'C,E,G#,D#', imageUrl: null },
    { id: 538, key: 'C', name: 'C7#5#9', notes: 'C,E,G#,Bb,D#', imageUrl: null },
    { id: 539, key: 'C', name: 'C7#9', notes: 'C,E,G,Bb,D#', imageUrl: null },
    { id: 540, key: 'C', name: 'C13#9', notes: 'C,E,G,Bb,D#,A', imageUrl: null },
    { id: 541, key: 'C', name: 'C7#9b13', notes: 'C,E,G,Bb,D#,Ab', imageUrl: null },
    { id: 542, key: 'C', name: 'Cmaj7#9#11', notes: 'C,E,G,B,D#,F#', imageUrl: null },
    { id: 543, key: 'C', name: 'C7#9#11', notes: 'C,E,G,Bb,D#,F#', imageUrl: null },
    { id: 544, key: 'C', name: 'C13#9#11', notes: 'C,E,G,Bb,D#,F#,A', imageUrl: null },
    { id: 545, key: 'C', name: 'C7#9#11b13', notes: 'C,E,G,Bb,D#,F#,Ab', imageUrl: null },
    { id: 546, key: 'C', name: 'Csus2', notes: 'C,D,G', imageUrl: null },
    { id: 547, key: 'C', name: 'CM9#5sus4', notes: 'C,F,G#,B,D', imageUrl: null },
    { id: 548, key: 'C', name: 'Csus24', notes: 'C,D,F,G', imageUrl: null },
    { id: 549, key: 'C', name: 'CM9sus4', notes: 'C,F,G,B,D', imageUrl: null },
    { id: 550, key: 'C', name: 'C11', notes: 'C,G,Bb,D,F', imageUrl: null },
    { id: 551, key: 'Cb', name: 'Cb9sus', notes: 'C,F,G,Bb,D', imageUrl: null },
    { id: 552, key: 'C', name: 'C13sus4', notes: 'C,F,G,Bb,D,A', imageUrl: null },
    { id: 553, key: 'C', name: 'C9no5', notes: 'C,E,Bb,D', imageUrl: null },
    { id: 554, key: 'C', name: 'C13no5', notes: 'C,E,Bb,D,A', imageUrl: null },
    { id: 555, key: 'C', name: 'CM#5add9', notes: 'C,E,G#,D', imageUrl: null },
    { id: 556, key: 'C', name: 'Cmaj9#5', notes: 'C,E,G#,B,D', imageUrl: null },
    { id: 557, key: 'C', name: 'C9#5', notes: 'C,E,G#,Bb,D', imageUrl: null },
    { id: 558, key: 'C', name: 'C9b13', notes: 'C,E,Bb,D,Ab', imageUrl: null },
    { id: 559, key: 'C', name: 'CMadd9', notes: 'C,E,G,D', imageUrl: null },
    { id: 560, key: 'C', name: 'Cmaj9', notes: 'C,E,G,B,D', imageUrl: null },
    { id: 561, key: 'C', name: 'C9', notes: 'C,E,G,Bb,D', imageUrl: null },
    { id: 562, key: 'C', name: 'C6add9', notes: 'C,E,G,A,D', imageUrl: null },
    { id: 563, key: 'C', name: 'Cmaj13', notes: 'C,E,G,B,D,A', imageUrl: null },
    { id: 564, key: 'C', name: 'CM7add13', notes: 'C,E,G,A,B,D', imageUrl: null },
    { id: 565, key: 'C', name: 'C13', notes: 'C,E,G,Bb,D,A', imageUrl: null },
    { id: 566, key: 'C', name: 'CM9b5', notes: 'C,E,Gb,B,D', imageUrl: null },
    { id: 567, key: 'C', name: 'C9b5', notes: 'C,E,Gb,Bb,D', imageUrl: null },
    { id: 568, key: 'C', name: 'C13b5', notes: 'C,E,Gb,A,Bb,D', imageUrl: null },
    { id: 569, key: 'C', name: 'C9#5#11', notes: 'C,E,G#,Bb,D,F#', imageUrl: null },
    { id: 570, key: 'C', name: 'Cmaj9#11', notes: 'C,E,G,B,D,F#', imageUrl: null },
    { id: 571, key: 'C', name: 'C9#11', notes: 'C,E,G,Bb,D,F#', imageUrl: null },
    { id: 572, key: 'C', name: 'C69#11', notes: 'C,E,G,A,D,F#', imageUrl: null },
    { id: 573, key: 'C', name: 'CM13#11', notes: 'C,E,G,B,D,F#,A', imageUrl: null },
    { id: 574, key: 'C', name: 'C13#11', notes: 'C,E,G,Bb,D,F#,A', imageUrl: null },
    { id: 575, key: 'C', name: 'C9#11b13', notes: 'C,E,G,Bb,D,F#,Ab', imageUrl: null },
    { id: 576, key: 'C', name: 'Cm9#5', notes: 'C,Eb,Ab,Bb,D', imageUrl: null },
    { id: 577, key: 'C', name: 'Cmadd9', notes: 'C,Eb,G,D', imageUrl: null },
    { id: 578, key: 'C', name: 'CmM9', notes: 'C,Eb,G,B,D', imageUrl: null },
    { id: 579, key: 'C', name: 'Cm9', notes: 'C,Eb,G,Bb,D', imageUrl: null },
    { id: 580, key: 'C', name: 'Cm69', notes: 'C,Eb,G,A,D', imageUrl: null },
    { id: 581, key: 'C', name: 'Cm13', notes: 'C,Eb,G,Bb,D,A', imageUrl: null },
    { id: 582, key: 'C', name: 'CmMaj9b6', notes: 'C,Eb,G,Ab,B,D', imageUrl: null },
    { id: 583, key: 'C', name: 'Cm9b5', notes: 'C,D,Eb,Gb,Bb', imageUrl: null },
    { id: 584, key: 'C', name: 'Cm11A', notes: 'C,Eb,G#,Bb,D,F', imageUrl: null },
    { id: 585, key: 'C', name: 'Cm11', notes: 'C,Eb,G,Bb,D,F', imageUrl: null },
    { id: 586, key: 'C', name: 'C11b9', notes: 'C,G,Bb,Db,F', imageUrl: null },
    { id: 587, key: 'C', name: 'C7sus4b9b13', notes: 'C,F,G,Bb,Db,Ab', imageUrl: null },
    { id: 588, key: 'C', name: 'Calt7', notes: 'C,E,Bb,Db', imageUrl: null },
    { id: 589, key: 'C', name: 'C7#5b9', notes: 'C,E,G#,Bb,Db', imageUrl: null },
    { id: 590, key: 'C', name: 'CMaddb9', notes: 'C,E,G,Db', imageUrl: null },
    { id: 591, key: 'C', name: 'CM7b9', notes: 'C,E,G,B,Db', imageUrl: null },
    { id: 592, key: 'C', name: 'C7b9', notes: 'C,E,G,Bb,Db', imageUrl: null },
    { id: 593, key: 'C', name: 'C13b9', notes: 'C,E,G,Bb,Db,A', imageUrl: null },
    { id: 594, key: 'C', name: 'C7b9b13', notes: 'C,E,G,Bb,Db,Ab', imageUrl: null },
  ];

  const pianoContainerRef = useRef(null);
  const pianoRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentChordIndex, setCurrentChordIndex] = useState(0);
  const [processedChords, setProcessedChords] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  // Process the chords sequentially
  useEffect(() => {
    // If we've processed all chords, mark as complete
    if (currentChordIndex >= chordData.length) {
      setIsComplete(true);
      return;
    }

    // If already processing or no container, skip
    if (isProcessing || !pianoContainerRef.current) {
      return;
    }

    // Get the current chord to process
    const currentChord = chordData[currentChordIndex];
    processChord(currentChord);

  }, [currentChordIndex, isProcessing]);

  // Function to process a single chord
  const processChord = (chord) => {
    setIsProcessing(true);
    console.log(`Processing chord: ${chord.name} (ID: ${chord.id})`);

    // Parse the notes
    const notes = chord.notes.split(",");
    const name = chord.name;
    const id = chord.id;

    // Clear any existing content
    if (pianoContainerRef.current) {
      pianoContainerRef.current.innerHTML = '';
    }

    // Create a new piano instance
    const piano = new Instrument(pianoContainerRef.current, {
      startOctave: 3,
      endOctave: 6,
      showOctaveNumbers: true,
      highlightedNotes: [...notes],
      whiteKeyWidth: 80,
      blackKeyWidth: 40,
      blackKeyHeight: 200,
      showNoteNames: 'onpress',
      keyPressStyle: 'vivid'
    });

    piano.create();
    pianoRef.current = piano;

    // Separate notes by position (using your original logic)
    const rootNote = notes[0];
    const middleNotes = notes.slice(1, 3);//default (1,3)
    const highNotes = notes.slice(3); //dfault(3)
    const middleNotesExtend = notes.slice(1, 4); //default (1,4)
    const highNotesExtend = notes.slice(4); //default (4)
    const lastNote = notes.slice(7) //default (-1)
    const loOctave = 3 //default 3
    const midOctave = 4 //default 4
    const hiOctave = 5 //default 5

    // Add a small delay to ensure piano is fully initialized and keys are pressed
    setTimeout(() => {
      // Press root note in octave 3
      console.log(`Pressing root key: ${rootNote}3`);
      piano.keyDown(`${rootNote}3`);

      // Using your original conditional logic for key pressing
      //default is > 6
      if (notes.length > 6) {
        // Press middle notes in octave 3
        middleNotesExtend.forEach(note => {
          console.log(`Pressing middle note Extended: ${note}3`);
          piano.keyDown(`${note}${loOctave}`);
        });

        // Press high notes in octave 4
        highNotesExtend.forEach(note => {
          console.log(`Pressing high note Extended: ${note}4`);
          piano.keyDown(`${note}${midOctave}`);
        });

        lastNote.forEach(note => {
          piano.keyDown(`${note}${hiOctave}`)
        });
      } else if (notes.length > 4) {
        // Press middle notes in octave 3
        middleNotesExtend.forEach(note => {
          console.log(`Pressing middle note Extended: ${note}3`);
          piano.keyDown(`${note}${loOctave}`);
        });



        // Press high notes in octave 4
        highNotesExtend.forEach(note => {
          console.log(`Pressing high note Extended: ${note}4`);
          piano.keyDown(`${note}4`);
        });
      } else {
        // For shorter chords
        middleNotesExtend.forEach(note => {
          console.log(`Pressing middle note: ${note}4`); // Fixed to match actual octave used
          piano.keyDown(`${note}4`);
        });

        highNotesExtend.forEach(note => {
          console.log(`Pressing high note: ${note}4`);
          piano.keyDown(`${note}4`);
        });
      }

      // After keys are pressed, rasterize the piano
      const rasterizeTimer = setTimeout(() => {
        console.log(`Rasterizing chord: ${name}`);

        // The rasterize method takes a callback function that receives the data URL
        piano.rasterize((dataUrl) => {
          console.log(`Image generated for chord: ${name}`);

          // Add the processed chord to our list
          setProcessedChords(prev => [...prev, {
            id: id,
            name: name,
            imageUrl: dataUrl
          }]);

          // Set the current image data for display
          setImageData(dataUrl);

          // Download the image
          downloadImage(dataUrl, `${name}-ID${id}.png`);

          // Mark processing as complete and move to the next chord
          setIsProcessing(false);
          setCurrentChordIndex(prevIndex => prevIndex + 1);
        });
      }, 300); // Small delay to ensure keys are visually pressed

      return () => clearTimeout(rasterizeTimer);
    }, 500);
  };

  const downloadImage = (dataUrl, fileName) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div id="pianoContainer" ref={pianoContainerRef}></div>

      {/* Display progress information */}
      <div>
        <h3>Processing Progress:</h3>
        <p>
          {isComplete
            ? "All chords processed successfully!"
            : `Processing chord ${currentChordIndex + 1} of ${chordData.length}: ${currentChordIndex < chordData.length ? chordData[currentChordIndex].name : ""
            }`
          }
        </p>
      </div>

      {/* Display the most recently generated image */}
      {imageData && (
        <div>
          <h3>Latest Generated Image:</h3>
          <img
            src={imageData}
            alt="Latest chord"
            style={{ maxWidth: '100%' }}
          />
        </div>
      )}

      {/* Display all processed chord images */}
      {processedChords.length > 0 && (
        <div>
          <h3>All Processed Chords:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {processedChords.map(chord => (
              <div key={chord.id} style={{ textAlign: 'center' }}>
                <h4>{chord.name} (ID: {chord.id})</h4>
                <img
                  src={chord.imageUrl}
                  alt={`${chord.name} chord`}
                  style={{ maxWidth: '300px', border: '1px solid #ccc' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {isProcessing && <p>Processing piano image...</p>}
    </div>
  );
}

export default App;
