import { Instrument } from "piano-chart";
import { useEffect, useRef, useState } from "react";

function App() {
  // Sample chord data
  const chordData = [
    { id: 1, key: 'A', name: 'A5', notes: 'A,E', imageUrl: null },
    { id: 2, key: 'A', name: 'AM7#5sus4', notes: 'A,D,E#,G#', imageUrl: null },
    { id: 3, key: 'A', name: 'A7#5sus4', notes: 'A,D,E#,G', imageUrl: null },
    { id: 4, key: 'A', name: 'Asus4', notes: 'A,D,E', imageUrl: null },
    { id: 5, key: 'A', name: 'AM7sus4', notes: 'A,D,E,G#', imageUrl: null },
    { id: 6, key: 'A', name: 'A7sus4', notes: 'A,D,E,G', imageUrl: null },
    { id: 7, key: 'A', name: 'A7no5', notes: 'A,C#,G', imageUrl: null },
    { id: 8, key: 'A', name: 'Aaug', notes: 'A,C#,E#', imageUrl: null },
    { id: 9, key: 'A', name: 'AM7b6', notes: 'A,C#,F,G#', imageUrl: null },
    { id: 10, key: 'A', name: 'Amaj7#5', notes: 'A,C#,E#,G#', imageUrl: null },
    { id: 11, key: 'A', name: 'A7#5', notes: 'A,C#,E#,G', imageUrl: null },
    { id: 12, key: 'A', name: 'A7b13', notes: 'A,C#,G,F', imageUrl: null },
    { id: 13, key: 'A', name: 'AM', notes: 'A,C#,E', imageUrl: null },
    { id: 14, key: 'A', name: 'Amaj7', notes: 'A,C#,E,G#', imageUrl: null },
    { id: 15, key: 'A', name: 'A7', notes: 'A,C#,E,G', imageUrl: null },
    { id: 16, key: 'A', name: 'A6', notes: 'A,C#,E,F#', imageUrl: null },
    { id: 17, key: 'A', name: 'A7add6', notes: 'A,C#,E,G,F#', imageUrl: null },
    { id: 18, key: 'A', name: 'A7b6', notes: 'A,C#,E,F,G', imageUrl: null },
    { id: 19, key: 'A', name: 'AMb5', notes: 'A,C#,Eb', imageUrl: null },
    { id: 20, key: 'A', name: 'AM7b5', notes: 'A,C#,Eb,G#', imageUrl: null },
    { id: 21, key: 'A', name: 'A7b5', notes: 'A,C#,Eb,G', imageUrl: null },
    { id: 22, key: 'A', name: 'Amaj#4', notes: 'A,C#,E,G#,D#', imageUrl: null },
    { id: 23, key: 'A', name: 'A7#11', notes: 'A,C#,E,G,D#', imageUrl: null },
    { id: 24, key: 'A', name: 'AM6#11', notes: 'A,C#,E,F#,D#', imageUrl: null },
    { id: 25, key: 'A', name: 'A7#11b13', notes: 'A,C#,E,G,D#,F', imageUrl: null },
    { id: 26, key: 'A', name: 'Am#5', notes: 'A,C,E#', imageUrl: null },
    { id: 27, key: 'A', name: 'Amb6M7', notes: 'A,C,F,G#', imageUrl: null },
    { id: 28, key: 'A', name: 'Am7#5', notes: 'A,C,F,G', imageUrl: null },
    { id: 29, key: 'A', name: 'Am', notes: 'A,C,E', imageUrl: null },
    { id: 30, key: 'A', name: 'Am/ma7', notes: 'A,C,E,G#', imageUrl: null },
    { id: 31, key: 'A', name: 'Am7', notes: 'A,C,E,G', imageUrl: null },
    { id: 32, key: 'A', name: 'Am6', notes: 'A,C,E,F#', imageUrl: null },
    { id: 33, key: 'A', name: 'AmMaj7b6', notes: 'A,C,E,F,G#', imageUrl: null },
    { id: 34, key: 'A', name: 'Adim', notes: 'A,C,Eb', imageUrl: null },
    { id: 35, key: 'A', name: 'AoM7', notes: 'A,C,Eb,G#', imageUrl: null },
    { id: 36, key: 'A', name: 'Am7b5', notes: 'A,C,Eb,G', imageUrl: null },
    { id: 37, key: 'A', name: 'Adim7', notes: 'A,C,Eb,Gb', imageUrl: null },
    { id: 38, key: 'A', name: 'Ao7M7', notes: 'A,C,Eb,F#,G#', imageUrl: null },
    { id: 39, key: 'A', name: 'A4', notes: 'A,D,G,C', imageUrl: null },
    { id: 40, key: 'A', name: 'Amadd4', notes: 'A,C,D,E', imageUrl: null },
    { id: 41, key: 'A', name: 'Am7add11', notes: 'A,C,E,G,D', imageUrl: null },
    { id: 42, key: 'A', name: 'A+add#9', notes: 'A,C#,E#,B#', imageUrl: null },
    { id: 43, key: 'A', name: 'A7#5#9', notes: 'A,C#,E#,G,B#', imageUrl: null },
    { id: 44, key: 'A', name: 'A7#9', notes: 'A,C#,E,G,B#', imageUrl: null },
    { id: 45, key: 'A', name: 'A13#9', notes: 'A,C#,E,G,B#,F#', imageUrl: null },
    { id: 46, key: 'A', name: 'A7#9b13', notes: 'A,C#,E,G,B#,F', imageUrl: null },
    { id: 47, key: 'A', name: 'Amaj7#9#11', notes: 'A,C#,E,G#,B#,D#', imageUrl: null },
    { id: 48, key: 'A', name: 'A7#9#11', notes: 'A,C#,E,G,B#,D#', imageUrl: null },
    { id: 49, key: 'A', name: 'A13#9#11', notes: 'A,C#,E,G,B#,D#,F#', imageUrl: null },
    { id: 50, key: 'A', name: 'A7#9#11b13', notes: 'A,C#,E,G,B#,D#,F', imageUrl: null },
    { id: 51, key: 'A', name: 'Asus2', notes: 'A,B,E', imageUrl: null },
    { id: 52, key: 'A', name: 'AM9#5sus4', notes: 'A,D,E#,G#,B', imageUrl: null },
    { id: 53, key: 'A', name: 'Asus24', notes: 'A,B,D,E', imageUrl: null },
    { id: 54, key: 'A', name: 'AM9sus4', notes: 'A,D,E,G#,B', imageUrl: null },
    { id: 55, key: 'A', name: 'A11', notes: 'A,E,G,B,D', imageUrl: null },
    { id: 56, key: 'Ab', name: 'Ab9sus', notes: 'A,D,E,G,B', imageUrl: null },
    { id: 57, key: 'A', name: 'A13sus4', notes: 'A,D,E,G,B,F#', imageUrl: null },
    { id: 58, key: 'A', name: 'A9no5', notes: 'A,C#,G,B', imageUrl: null },
    { id: 59, key: 'A', name: 'A13no5', notes: 'A,C#,G,B,F#', imageUrl: null },
    { id: 60, key: 'A', name: 'AM#5add9', notes: 'A,C#,E#,B', imageUrl: null },
    { id: 61, key: 'A', name: 'Amaj9#5', notes: 'A,C#,E#,G#,B', imageUrl: null },
    { id: 62, key: 'A', name: 'A9#5', notes: 'A,C#,E#,G,B', imageUrl: null },
    { id: 63, key: 'A', name: 'A9b13', notes: 'A,C#,G,B,F', imageUrl: null },
    { id: 64, key: 'A', name: 'AMadd9', notes: 'A,C#,E,B', imageUrl: null },
    { id: 65, key: 'A', name: 'Amaj9', notes: 'A,C#,E,G#,B', imageUrl: null },
    { id: 66, key: 'A', name: 'A9', notes: 'A,C#,E,G,B', imageUrl: null },
    { id: 67, key: 'A', name: 'A6add9', notes: 'A,C#,E,F#,B', imageUrl: null },
    { id: 68, key: 'A', name: 'Amaj13', notes: 'A,C#,E,G#,B,F#', imageUrl: null },
    { id: 69, key: 'A', name: 'AM7add13', notes: 'A,C#,E,F#,G#,B', imageUrl: null },
    { id: 70, key: 'A', name: 'A13', notes: 'A,C#,E,G,B,F#', imageUrl: null },
    { id: 71, key: 'A', name: 'AM9b5', notes: 'A,C#,Eb,G#,B', imageUrl: null },
    { id: 72, key: 'A', name: 'A9b5', notes: 'A,C#,Eb,G,B', imageUrl: null },
    { id: 73, key: 'A', name: 'A13b5', notes: 'A,C#,Eb,F#,G,B', imageUrl: null },
    { id: 74, key: 'A', name: 'A9#5#11', notes: 'A,C#,E#,G,B,D#', imageUrl: null },
    { id: 75, key: 'A', name: 'Amaj9#11', notes: 'A,C#,E,G#,B,D#', imageUrl: null },
    { id: 76, key: 'A', name: 'A9#11', notes: 'A,C#,E,G,B,D#', imageUrl: null },
    { id: 77, key: 'A', name: 'A69#11', notes: 'A,C#,E,F#,B,D#', imageUrl: null },
    { id: 78, key: 'A', name: 'AM13#11', notes: 'A,C#,E,G#,B,D#,F#', imageUrl: null },
    { id: 79, key: 'A', name: 'A13#11', notes: 'A,C#,E,G,B,D#,F#', imageUrl: null },
    { id: 80, key: 'A', name: 'A9#11b13', notes: 'A,C#,E,G,B,D#,F', imageUrl: null },
    { id: 81, key: 'A', name: 'Am9#5', notes: 'A,C,F,G,B', imageUrl: null },
    { id: 82, key: 'A', name: 'Amadd9', notes: 'A,C,E,B', imageUrl: null },
    { id: 83, key: 'A', name: 'AmM9', notes: 'A,C,E,G#,B', imageUrl: null },
    { id: 84, key: 'A', name: 'Am9', notes: 'A,C,E,G,B', imageUrl: null },
    { id: 85, key: 'A', name: 'Am69', notes: 'A,C,E,F#,B', imageUrl: null },
    { id: 86, key: 'A', name: 'Am13', notes: 'A,C,E,G,B,F#', imageUrl: null },
    { id: 87, key: 'A', name: 'AmMaj9b6', notes: 'A,C,E,F,G#,B', imageUrl: null },
    { id: 88, key: 'A', name: 'Am9b5', notes: 'A,B,C,Eb,G', imageUrl: null },
    { id: 89, key: 'A', name: 'Am11A', notes: 'A,C,E#,G,B,D', imageUrl: null },
    { id: 90, key: 'A', name: 'Am11', notes: 'A,C,E,G,B,D', imageUrl: null },
    { id: 91, key: 'A', name: 'A11b9', notes: 'A,E,G,Bb,D', imageUrl: null },
    { id: 92, key: 'A', name: 'A7sus4b9b13', notes: 'A,D,E,G,Bb,F', imageUrl: null },
    { id: 93, key: 'A', name: 'Aalt7', notes: 'A,C#,G,Bb', imageUrl: null },
    { id: 94, key: 'A', name: 'A7#5b9', notes: 'A,C#,E#,G,Bb', imageUrl: null },
    { id: 95, key: 'A', name: 'AMaddb9', notes: 'A,C#,E,Bb', imageUrl: null },
    { id: 96, key: 'A', name: 'AM7b9', notes: 'A,C#,E,G#,Bb', imageUrl: null },
    { id: 97, key: 'A', name: 'A7b9', notes: 'A,C#,E,G,Bb', imageUrl: null },
    { id: 98, key: 'A', name: 'A13b9', notes: 'A,C#,E,G,Bb,F#', imageUrl: null },
    { id: 99, key: 'A', name: 'A7b9b13', notes: 'A,C#,E,G,Bb,F', imageUrl: null },
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
/*
    // Explicitly extract the root note
    const rootNote = notes[0];
    const remainingNotes = notes.slice(1);
*/
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

      // For extended chords (with 9, 11, 13), use a special approach
      if (/9|11|13/.test(chord.name)) {
        // Identify chord components
        const thirdAndFifth = []; // 3rd and 5th
        const sevenths = []; // 7th
        const extensions = []; // 9th, 11th, 13th

        // Categorize remaining notes (simplified approach)
        for (let i = 1; i < notes.length; i++) {
          const note = notes[i];
          if (i === 1 || i === 2) {
            thirdAndFifth.push(note); // Likely 3rd or 5th
          } else if (i === 3) {
            sevenths.push(note); // Likely 7th
          } else {
            extensions.push(note); // Likely extensions
          }
        }

        // Play 3rd and 5th in octave 4
        thirdAndFifth.forEach(note => {
          console.log(`Pressing 3rd/5th: ${note}4`);
          piano.keyDown(`${note}4`);
        });

        // Play 7th in octave 4
        sevenths.forEach(note => {
          console.log(`Pressing 7th: ${note}4`);
          piano.keyDown(`${note}4`);
        });

        // Play extensions in octave 5
        extensions.forEach(note => {
          console.log(`Pressing extension: ${note}5`);
          piano.keyDown(`${note}5`);
        });
      } else {
        // For non-extended chords, use the original approach
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
