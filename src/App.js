import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <NameOfAlbum name = {"In a time lapse"}/>
    <ImageOfAlbum image = "https://cdn1.ozone.ru/multimedia/1005972991.jpg"/>
    <AlbumArtist artist = {"Ludovico Einaudi"}/>
    <YearOfPublication year = {"21 januare 2013"}/>
    <SongsList songs = {Songs}/>
    </div>
  );
}
function ImageOfAlbum(props){
  return(
    <div>
      <img src={props.image} width="400" height="400"/>
    </div>
  );
}
function NameOfAlbum(props){
  return(
    <div>
      <h1>Album: {props.name}</h1>
    </div>
  );
}

function AlbumArtist(props){
  return(
    <div>
      <h2>{props.artist}</h2>
    </div>
  );
}
function YearOfPublication(props){
  return(
    <div>
      <h3>{props.year}</h3>
    </div>
  );
}
let Songs = [
  {
    No: 1,
    title: '"Corale"',
    length: '2:05'
  },
  {
    No: 2,
    title: '"Time Lapse"',
    length: '5:32'
  },
  {
    No: 3,
    title: '"Life"',
    length: '4:23'
  },
  {
    No: 4,
    title: '"Walk"',
    length: '3:28'
  },
  {
    No: 5,
    title: '"Discovery at Night"',
    length: '4:26'
  },
  {
    No: 6,
    title: '"Run"',
    length: '5:32'
  },
  {
    No: 7,
    title: '"Brothers"',
    length: '4:51'
  },
  {
    No: 8,
    title: '"Orbits"',
    length: '2:57'
  },
  {
    No: 9,
    title: '"Two Trees"',
    length: '6:26'
  },
  {
    No: 10,
    title: '"Newton\'s Cradle"',
    length: '7:53'
  },
  {
    No: 11,
    title: '"Waterways"',
    length: '4:18'
  },
  {
    No: 12,
    title: '"Experience"',
    length: '5:15'
  },
  {
    No: 13,
    title: '"Underwood"',
    length: '4:13'
  },
  {
    No: 14,
    title: '"Burning"',
    length: '5:00'
  },
  ];


  function SongsList(props) {
    return (
      <div className='Songs'>
        <h4>Songs:</h4>
        <ul>
          {props.songs.map(song =>
            <li key={song.No}>
              {song.No}. {song.title} - {song.length}
            </li>
          )}
        </ul>
      </div>
    );

  }
export default App;
