// import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import {
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardLink,
  CardBody,
  Form,
  Label,
  Input,
  Button,
  Row,
  Col
} from "reactstrap"
import Avatar from '@components/avatar'
import { MoreVertical, Edit, User, Check, X, FileText, Archive, Trash, ChevronDown, Delete, TrendingUp, Box, DollarSign, UserPlus, UserCheck, Grid } from 'react-feather'

// import axios from "axios"
import Cleave from 'cleave.js/react'
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
  const history = useHistory()
  console.log(history)
  const [admindata, setAdmindata] = useState([])
  console.log(admindata)
  const [group, setGroup] = useState(0)
  const [device, setDevice] = useState(0)
  const [user, setUser] = useState(0)
  const [admin, setAdmin] = useState(0)
  const fetchApi = (admins) => {
      console.log("admins ========= ")
      console.log(admins.admin_permission)
      if (admins.admin_permission === 0) {
        Promise.all([
          axios.get("https://api.phanuwat.info/api/group"),
          axios.get("https://api.phanuwat.info/api/device/device/all"),
          axios.get("https://api.phanuwat.info/api/user/user/all"),
          axios.get("https://api.phanuwat.info/api/admin")
        ]).then(res => {
          setGroup(res[0].data.data.message.length)
          setDevice(res[1].data.data.message.length)
          setUser(res[2].data.data.message.length)
          setAdmin(res[3].data.data.message.length)
        })
      } else {
        Promise.all([
          axios.get(`https://api.phanuwat.info/api/device/group/group_web/${admins.group_id}`),
          axios.get(`https://api.phanuwat.info/api/device/group/group_web/${admins.group_id}`),
          axios.get("https://api.phanuwat.info/api/user/user/all"),
          axios.get("https://api.phanuwat.info/api/admin")
        ]).then(res => {
          setGroup(res[0].data.data.message.length)
          setDevice(res[1].data.data.message.length)
          setUser(res[2].data.data.message.length)
          setAdmin(res[3].data.data.message.length)
        })
      }
  }
  
  const getLocal = () => {
    const authStorage = localStorage.getItem("auth")
    const savedStorage = localStorage.getItem("saved")
    if (authStorage === null || savedStorage === null) {
      history.push('/login')
      // return <Link to="/login"/>
      localStorage.clear()
    } else if (savedStorage && (new Date().getTime() - savedStorage > 50 * 60 * 1000)) {
      history.push('/login')
      // return <Link to="/login"/>
      localStorage.clear()
    } else if (authStorage) {
      setAdmindata(JSON.parse(authStorage).data.message[0])
      fetchApi(JSON.parse(authStorage).data.message[0])
      // return <Link to="/home"/>
      // history.push('/home')
    }
  }

  useEffect(() => {
    console.log('useEFFECT $$')
    getLocal()
    // fetchApi()
  }, [])
  
  return (
    <div>
        {/* Group */}
        <Card className='card-statistics'>
          <CardHeader>
            <CardTitle tag='h4'>Statistics</CardTitle>
            {/* <CardText className='card-text font-small-2 me-25 mb-0'>Updated 1 month ago</CardText> */}
          </CardHeader>
          <CardBody className='statistics-body'>
            <Row>
              {admindata.admin_permission === 0 ? <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-success' icon={<Grid size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{ group}</h4>
                    <CardText className='font-small-3 mb-0'>Group</CardText>
                  </div>
                </div>
              </Col> : null}
              {admindata.admin_permission === 0 ? <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-success' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{device}</h4>
                    <CardText className='font-small-3 mb-0'>Device</CardText>
                  </div>
                </div>
              </Col> : <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-success' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{device}</h4>
                    <CardText className='font-small-3 mb-0'>Device</CardText>
                  </div>
                </div>
              </Col>
              }
              {admindata.admin_permission === 0 ? <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-success' icon={<User size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{user}</h4>
                    <CardText className='font-small-3 mb-0'>User</CardText>
                  </div>
                </div>
              </Col> : <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-success' icon={<User size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{user}</h4>
                    <CardText className='font-small-3 mb-0'>User</CardText>
                  </div>
                </div>
              </Col>
              }
              {admindata.admin_permission === 0 ? <Col>
                <div className='d-flex align-items-center' >
                  <Avatar color='light-warning' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{admin}</h4>
                    <CardText className='font-small-3 mb-0'>Admin</CardText>
                  </div>
                </div>
              </Col> : null
              }
              
            </Row>
          </CardBody>
        </Card>
    </div>
  )
}

export default Home
