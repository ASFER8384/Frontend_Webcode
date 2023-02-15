import React, { useEffect, useState } from 'react'
import "./Header.css"
import { useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"



import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { getAllMovies } from '../../api/api';
import { adminAction, userAction } from '../../store';

export default function Header() {
  const [vlue, setVlue] = useState(0)
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  const disatch = useDispatch()

  const isadminLoggedin = useSelector((state) => state.admin.isLoggedin)
  const isuserLoggedin = useSelector((state) => state.user.isLoggedin)
  const [selected,setSelected]=useState()

  useEffect(() => {
    getAllMovies().then((data) => setMovies(data.movies)).
      catch((err) => console.log(err))
  }, [])

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];

  const [value, setValue] = React.useState(0);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  const logout=(isAdmin)=>{
    disatch( isAdmin ? adminAction.logout(): userAction.logout())
    console.log("hi")
  }
  const handleChange=(e,val)=>{
    setSelected(val)
    const movie = movies.find((mov)=>mov.title===val)
    console.log(movie)
    if(isuserLoggedin){
        navigate(`/booking/${movie._id}`)
    }
  }


  return (
    <div className='header'>
      <div className='navbar'>
        <div className='navbar-wrapper'>
          <div style={{ cursor: "pointer" }} className='flex-box-nav start' onClick={() => navigate("/")}>BOOK MY SHOW</div>
          <div className='flex-box-nav center'>
            <Stack spacing={2} sx={{ width: 400, color: 'white' }}>
              <Autocomplete
              onChange={handleChange}
                id="free-solo-demo"
                options={movies && movies.map((option) => option.title)}
                renderInput={(params) => <TextField 
                 sx={{ input: { color: "black",fontSize:"18px",marginTop:"-9px"} }}  {...params} placeholder="search movies...." />}
              />
            </Stack>
          </div>
          <div className='flex-box-nav end'>
            <Box display={"flex"}>
              <Tabs textColor='white' indicatorColor='secondary' value={vlue} onChange={(e, val) => { setVlue(val) }}>
                <Tab onClick={() => navigate("/movies")} label="Movies" />
                {!isadminLoggedin && !isuserLoggedin &&
                  <>
                    <Tab onClick={() => navigate("/admin")} label="Admin" />
                    <Tab onClick={() => navigate("/login")} label="Login" />
                  </>
                }
                {
                  isuserLoggedin && <>
                    <Tab onClick={() => navigate("/profile")} label="profile" />
                    <Tab  onClick={()=>logout(false)} label="Logout" />
                  </>
                }
                 {
                  isadminLoggedin&& <>
                    <Tab className='tabs' onClick={() => navigate("/addmovie")} label="AddMovie" />
                    {/* <Tab className='tabs' onClick={() => navigate("/profile")} label="profile" /> */}
                    <Tab className='tabs' onClick={()=>logout(true)} label="Logout" />
                  </>
                }

              </Tabs>
            </Box>
          </div>
        </div>
      </div>
    </div >
  )
}
