import { useEffect, useState } from "react"
import { Usestyle } from "./latestTodoCss"
import { Grid,Button,TextField, Divider, Avatar } from "@mui/material"
import { useDispatch } from "react-redux"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from "react-redux"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Swal from "sweetalert2";
export default function LatestTodo(props){
   const dispatch=useDispatch()
    var classes=Usestyle()
    var count=0;

    const [todoElement,setTodoElement]=useState(' ')
    const [elementId,setElementId]=useState(' ')
    const [open, setOpen] = useState(false);
    const[id,setid]=useState(1)
    const[refresh,setrefresh]=useState(false)
    const[documentopen,setdocumentopen]=useState(false)
    const[developer,setdeveloper]=useState(false)
    const [showBtn,setShowbtn]=useState(false)


    const tododata=useSelector(state=>state.Element)
    var td=Object.values(tododata)
    console.log(td)

   const handleChange=(event)=>{
    setShowbtn(true)
       setTodoElement(event.target.value)
      
   }
   const handlesubmit=()=>{
            var ids=id+1;
            setid(ids)
           setElementId(ids)
          var   body={elementid:ids,elementname:todoElement}
           dispatch({type:'ADD_ELEMENT' ,payload:[ids,body]})  
           Swal.fire({
            position: 'center',
            icon: "success",
            title: "Your todo-element saved",
            showConfirmButton: false,
            timer: 1000
          }); 
           setrefresh(!refresh)
          
   }


    
  const handleClickOpen = (item) => {
    setElementId(item.elementid)
    setTodoElement(item.elementname)
    setOpen(true);
  };

  const handleClose = () => {
    setdocumentopen(false)
    setdeveloper(false)
    setOpen(false);
  };

  const handleedit=()=>{
    console.log(td.elementid)
   var  body={elementid:elementId,elementname:todoElement}
    
     dispatch({type:'EDIT_ELEMENT',payload:[elementId,body]})
     Swal.fire("TODO ELEMENT EDIT SUCCESSFULY");
     setOpen(false)
  }

  const handledelete=(item)=>{
    dispatch({type:'DELETE_ELEMENT',payload:[item.elementid]})
    
    Swal.fire({
      icon: "delete",
      title: "Deleted",
      text: " Todo Element Deleted Successfully",
      
    });
    setrefresh(!refresh)
  }
  const handledocumentopen=()=>{
    setdocumentopen(true)
  }
  useEffect(function(){
    handlestart()
  },[])

  const handlestart=()=>{
    return(
      
Swal.fire({
  html:'<img src="iphone.png" width=220 height=300 />' ,
  position: "center",

  title: "Welcome to Latest_TodoList",
  showConfirmButton: false,
  timer: 2500
})
    )
  }

  const handleme=()=>{
    setdeveloper(true)
  }
  const handlehelp=()=>{
    return(
    <Dialog
    open={documentopen}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >

    <DialogContent>
      <DialogContentText id="alert-dialog-description">
       <h1>
        Documentation
       </h1>
       <h2>Steps</h2>
       <ul>
        <li> Please click the type box and write that you want to save .........</li>
        <li> After 1 step you click the submit button and your element will be automatecly saved in todo list </li>
        <li> If You want edit the element so please click the edit Icon and you can edit your todo element</li>
        <li><BorderColorIcon/></li>
        
        <li> If You want Remove/delete the element so please click the Delete Icon and you can delete your todo element </li>
        <li><DeleteIcon/></li>
       </ul>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>CLOSE</Button>
    </DialogActions>
  </Dialog>
    )
  }


  const handledeveloper=()=>{
    return(
    <Dialog
    
    open={developer}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >

    <DialogContent>
      <DialogContentText id="alert-dialog-description">
       <h1>
        Developer Information
       </h1>
       <img src="person.png" width='100' height='100' />
       <h2>Divyansh Gupta </h2>
       <ul>
        <li> student Of Btech </li>
        <li> age:21 </li>
        <li> react-js developer</li>
       
       </ul>
       
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>CLOSE</Button>
    </DialogActions>
  </Dialog>
    )
  }











  const displaydialog=()=>{
    return(
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
    
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Grid container spacing={2}>
         <Grid item xs={12}>
            <h2 style={{fontFamily:'cursive',color:'#0c2461', display:'flex',textAlign:'center',justifyContent:'center'}}> EDIT_TODO_ELEMENT</h2>
         </Grid>
            <Grid item xs={12} style={{padding:50}}>
                <TextField value={todoElement} onChange={(event)=>setTodoElement(event.target.value)}  fullWidth variant="outlined" label="Please enter ........"/> <br/><br/>
                <Button onClick={handleedit} fullWidth variant="contained" color="success">

             EDIT
             </Button>
             <div style={{background:'#ced6e0',color:'black',width:'413px',height:'220px',marginTop:20}}>
               {display()}
            </div>   
            </Grid>
               
        
         </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    )
  }

    
    

    const display=()=>{
   
        return td.map((item)=>{
            count=count+1
            return(
            <div>
                <ul >
                <div style={{display:'flex',flexWrap:'wrap',textAlign:'center',justifyContent:'space-between',marginLeft:40,fontSize:20,fontFamily:'sans-serif',textTransform:'capitalize',fontWeight:'bold'}}>
                 <li > {item.elementname}
              
                 <IconButton aria-label="delete" onClick={()=>handleClickOpen(item)}>
              <BorderColorIcon/>
               </IconButton>
               
                 <IconButton aria-label="delete" onClick={()=>handledelete(item)}>
                <DeleteIcon />
               </IconButton>
             
               </li> 
                 </div>  
                 </ul>
            </div>)
        })
    }
    return(<div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:'#0c2461'}}>
        <Toolbar>
          <IconButton
          onClick={handleme}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Latest_Todo List 
          </Typography>
          <Button color="inherit" onClick={handledocumentopen}> any Help...?</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div className={classes.container}>
            
         <div className={classes.box} >
         <Grid container spacing={2}>
         <Grid item xs={12}>
            <h1 style={{fontFamily:'cursive',color:'#0c2461', display:'flex',textAlign:'center',justifyContent:'center'}}>Latest Todo List</h1>
         </Grid>
            <Grid item xs={12} style={{padding:50}}>
                <TextField  onChange={handleChange}  fullWidth variant="outlined" label="Please enter ........"/> <br/><br/>
              {showBtn? <><Button onClick={handlesubmit} fullWidth variant="contained" color="success">
              submit
             </Button></> :<></>}
             <div style={{background:'#ced6e0',color:'black',width:'358px',height:'320px',marginTop:20,overflowX:'scroll'}}>
               {display()}
            </div>   
            </Grid>
               
        
         </Grid>
         </div>
         {displaydialog()}
         {handlehelp()}
         {handledeveloper()}
         </div>
         </div>)
}
