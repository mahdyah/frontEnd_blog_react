import './App.css';
import {Route,Switch} from 'react-router-dom'
import SignUpandIn from './components/pages/SignUpandIn'
import About from './components/pages/About'
import Home from './components/pages/Home'
import {useState} from 'react'
import ListBlogsEdit from './components/forms/ListBlogsEdit';
import NewPost from './components/pages/NewPost';
import UpdateBlog from './components/forms/UpdateBlog';
import Contact from './components/pages/Contact';


 function App() {
  const [user,setUser]=useState(null)
  return (
    <div className="container">
    <h1>The Blog</h1>
    <Switch>
      <Route exact path ='/' render={properties=>
      <Home {...properties} user={user}/>} />

      <Route path ='/login' render={properties=>
      <SignUpandIn {...properties} setUser={setUser}/>}/> 

      <Route  path ='/new' render={properties=>
      <NewPost {...properties} user={user}/>} />

      <Route path ='/about' render={properties=>
      <About {...properties} setUser={setUser}/>}/>

<Route path ='/contact' render={properties=>
      <Contact {...properties} setUser={setUser}/>}/>

      <Route exact path= '/update' render={properties=>
      <ListBlogsEdit {...properties} user={user}/>} />

       <Route path= '/update/:id' render={properties=>
      <UpdateBlog {...properties} user={user}/>} />
    </Switch>
    </div>
  );
}

export default App;
