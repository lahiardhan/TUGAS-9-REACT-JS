import React, { Component } from "react";
import {
	Nav,
	Navbar,
	OverlayTrigger,
	Popover,
	Pagination,
	ProgressBar,
	Table,
	Tab,
	Collapse,
	NavDropdown,
	Form,
	Button,
	Container,
	Breadcrumb,
	Col,
	Row,
	Spinner,
	Tabs,
} from "react-bootstrap";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buka: false,
		};
		this.collapseButton = this.collapseButton.bind(this);
	}
	collapseButton() {
		this.setState({ buka: !this.state.buka });
	}

	render() {
		const popoverButton = (
			<Popover title="informasi" id="popover-basic">
				<Popover.Title>Informasi Website</Popover.Title>
				<Popover.Content>
					Website ini dibuat untuk memudahkan dalam pencarian informasi
					terkini tentang berita olahraga
				</Popover.Content>
			</Popover>
		);
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
					<Navbar.Collapse className="justify-content-between">
						<Nav>
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Berita</Nav.Link>
							<Nav.Link href="#action3">Live Scores</Nav.Link>
							<NavDropdown title="Piala & Liga">
								<NavDropdown.Item href="#action4">
									Premier League
								</NavDropdown.Item>
								<NavDropdown.Item href="#action5">
									Serie A
								</NavDropdown.Item>
								<NavDropdown.Item href="#action6">
									Ligue 1
								</NavDropdown.Item>
								<NavDropdown.Item href="#action7">
									Bundesliga
								</NavDropdown.Item>
								<NavDropdown.Item href="#action8">
									La Liga
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#action9">Transfer Pemain</Nav.Link>
							<Nav.Link href="#action10">Tim</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="mr-2"
								aria-label="Search"
							/>
							<Button variant="outline-primary">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				<Container>
					<Row className="justify-content-end mb-3">
						<Col className="col-4">
							<Breadcrumb>
								<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
								<Breadcrumb.Item active>
									Transfer Pemain
								</Breadcrumb.Item>
							</Breadcrumb>
						</Col>
					</Row>
					<Row>
						<Col>
							<h3>Rumor Transfer Pemain</h3>
						</Col>
						<Col className="col-1">
							<Spinner animation="border" variant="success"></Spinner>
							<Spinner animation="grow" variant="success"></Spinner>
						</Col>
					</Row>
					<Row>
						<Table>
							<Tabs className="justify-content-between">
								<Tab eventKey="1" title="Semua Transfer"></Tab>
								<Tab eventKey="2" title="Liga Primer Inggris"></Tab>
								<Tab eventKey="3" title="Serie A"></Tab>
								<Tab eventKey="4" title="Divisi Primera"></Tab>
								<Tab eventKey="5" title="Bundesliga"></Tab>
								<Tab eventKey="6" title="Liga 1 Indonesia"></Tab>
							</Tabs>
						</Table>
					</Row>
					<Row>
						<Table>
							<thead>
								<th>#</th>
								<th>Nama Pemain</th>
								<th>Tim</th>
								<th>Transfer</th>
								<th>Proses Transfer</th>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>MAROUANE FELLAINI</td>
									<td>MANCHESTER UNITED</td>
									<td>SHANDONG LUNENG</td>
									<td>
										<ProgressBar
											animated
											now={85}
											label={`85%`}
										></ProgressBar>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>LUIS NANI</td>
									<td>SPORTING CP</td>
									<td>ORLANDO CITY</td>
									<td>
										<ProgressBar
											animated
											now={55}
											label={`55%`}
										></ProgressBar>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>MAREK HAMSIK</td>
									<td>NAPOLI</td>
									<td>DALIAN YIFANG</td>
									<td>
										<ProgressBar
											animated
											now={95}
											label={`95%`}
										></ProgressBar>
									</td>
								</tr>
								<tr>
									<td>4</td>
									<td>SARDAR AZMOUN</td>
									<td>RUBIN KAZAN</td>
									<td>ZENIT ST PETERSBURG</td>
									<td>
										<ProgressBar
											animated
											now={100}
											label={`100%`}
										></ProgressBar>
									</td>
								</tr>
								<tr>
									<td>5</td>
									<td>MICHY BATSHUAYI</td>
									<td>CHELSEA</td>
									<td>CRYSTAL PALACE</td>
									<td>
										<ProgressBar
											animated
											now={50}
											label={`50%`}
										></ProgressBar>
									</td>
								</tr>
								<tr>
									<td>6</td>
									<td>LUCAS PIAZON</td>
									<td>CHELSEA</td>
									<td>CHIEVO</td>
									<td>
										<ProgressBar
											animated
											now={100}
											label={`100%`}
										></ProgressBar>
									</td>
								</tr>
							</tbody>
						</Table>
					</Row>

					<Row>
						<Pagination>
							<Pagination.First />
							<Pagination.Prev />
							<Pagination.Item active>{1}</Pagination.Item>
							<Pagination.Ellipsis />

							<Pagination.Item>{10}</Pagination.Item>
							<Pagination.Item>{11}</Pagination.Item>
							<Pagination.Item>{12}</Pagination.Item>
							<Pagination.Item>{13}</Pagination.Item>
							<Pagination.Item>{14}</Pagination.Item>

							<Pagination.Ellipsis />
							<Pagination.Item>{20}</Pagination.Item>
							<Pagination.Next />
							<Pagination.Last />
						</Pagination>
					</Row>

					<Row>
						<Col className="pl-0 col-1">
							<OverlayTrigger
								trigger="click"
								placement="right"
								overlay={popoverButton}
							>
								<Button>Informasi</Button>
							</OverlayTrigger>
						</Col>
						<Col className="pl-0">
							<Button onClick={this.collapseButton}>View Website</Button>
							<Collapse in={this.state.buka}>
								<p>Akses Sport V1.0</p>
							</Collapse>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
