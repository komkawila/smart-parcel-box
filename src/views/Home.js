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

import Cleave from 'cleave.js/react'
import { useHistory } from "react-router-dom"
import { useEffect } from "react"

const Home = () => {
  const history = useHistory()
  console.log(history)
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
      // return <Link to="/home"/>
      // history.push('/home')
    }
  }
  
  useEffect(() => {
    console.log('useEFFECT $$')
  getLocal()
  }, [])

  
  return (
    <div>
        {/* Group */}
        <Card className='card-statistics'>
          <CardHeader>
            <CardTitle tag='h4'>Group Statistics</CardTitle>
            {/* <CardText className='card-text font-small-2 me-25 mb-0'>Updated 1 month ago</CardText> */}
          </CardHeader>
          <CardBody className='statistics-body'>
            <Row>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-primary' icon={<Grid size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Device</CardText>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-success' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Blank</CardText>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-warning' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Deposit</CardText>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        {/* Device */}
        <Card className='card-statistics'>
          <CardHeader>
            <CardTitle tag='h4'>Device Statistics</CardTitle>
            {/* <CardText className='card-text font-small-2 me-25 mb-0'>Updated 1 month ago</CardText> */}
          </CardHeader>
          <CardBody className='statistics-body'>
            <Row>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-primary' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Device</CardText>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-success' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Blank</CardText>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-warning' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Deposit</CardText>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        {/* User */}
        <Card className='card-statistics'>
          <CardHeader>
            <CardTitle tag='h4'>User Statistics</CardTitle>
            {/* <CardText className='card-text font-small-2 me-25 mb-0'>Updated 1 month ago</CardText> */}
          </CardHeader>
          <CardBody className='statistics-body'>
            <Row>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-primary' icon={<User size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Device</CardText>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-success' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Blank</CardText>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-warning' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Deposit</CardText>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        {/* Admin */}
        <Card className='card-statistics'>
          <CardHeader>
            <CardTitle tag='h4'>Admin Statistics</CardTitle>
            {/* <CardText className='card-text font-small-2 me-25 mb-0'>Updated 1 month ago</CardText> */}
          </CardHeader>
          <CardBody className='statistics-body'>
            <Row>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-primary' icon={<User size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Device</CardText>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-success' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Blank</CardText>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='d-flex align-items-center'>
                  <Avatar color='light-warning' icon={<Box size={24} />} className='me-2' />
                  <div className='my-auto'>
                    <h4 className='fw-bolder mb-0'>{0}</h4>
                    <CardText className='font-small-3 mb-0'>Deposit</CardText>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
    </div>
  )
}

export default Home
