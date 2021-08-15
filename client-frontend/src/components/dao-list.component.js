import React, { Component } from "react";
import daoDataService from "../services/dao.service";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';




export default class DaosList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveDaos = this.retrieveDaos.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.categoryFilter = this.categoryFilter.bind(this);
    this.searchFilter = this.searchFilter.bind(this);

    this.state = {
      daos: [],
      daoProtocols: [],
      currentDao: null,
      currentIndex: -1,
      searchFilter: ""
    };
  }



  componentDidMount() {
    this.retrieveDaos();
  }

  onChangeSearchTitle(e) {
    const searchFilter = e.target.value;

    this.setState({
      searchFilter: searchFilter
    });
  }

  retrieveDaos() {
    daoDataService.getAll()
      .then(response => {
        this.setState({
          daos: response.data,
          daoProtocols: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveDaos();
    this.setState({
      currentDao: null,
      currentIndex: -1
    });
  }

  categoryFilter(cat) {


    this.setState({
      daos: this.state.daoProtocols.filter(
        ({ category }) =>
          cat === category || cat === "All"
      )
    })
  }



  searchFilter() {
    // this.setState({
    //   currentDao: null,
    //   currentIndex: -1
    // });

    // daoDataService.findByTitle(this.state.searchFilter)
    //   .then(response => {
    //     this.setState({
    //       daos: response.data
    //     });
    //     console.log(response.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });


  }



  render() {
    const { searchFilter, daos, daoProtocols, currentIndex } = this.state;

    // get unique category protocol
    const uniqueProtocols = (x, i, array) => array.indexOf(x) === i;

    const DAO_Protocols = daoProtocols.map(dao => dao.category).filter(
      uniqueProtocols
    );

    DAO_Protocols.push("All");
    DAO_Protocols.sort();

    let totalAUM = 0;
    for (let index = 0; index < daos.length; index++) {
      
        if(Number.isNaN(daos[index].AUM))
          continue;
        totalAUM += daos[index].AUM;

    }

    const renderCategory = () => {

      return DAO_Protocols.map((key, index) => {

        return <button
          // type="submit"
          className="badge badge-success"

          key={index}
          onClick={() => this.categoryFilter(key)}
        >
          {key.toUpperCase()}
        </button>
      })
    }

    const renderHeader = () => {
      let headerElement = ['name', 'category', 'AUM (USD)', 'twitter followers', 'founded date']

      return headerElement.map((key, index) => {
        return <th key={index} >{key.toUpperCase()}</th>
      })
    }

    const renderBody = () => {
      return daos && daos.map((dao, index) => {

        return (

          <tr className={
            (index === currentIndex ? "active" : "")
          }
            // onClick={() => this.setActiveDao(dao, index)}
            key={index}
          >
            <Link
              to={"/daos_display/" + dao._id}
              className="badge badge-warning"
            ><td><img src={dao.logo_link} />{dao.full_name}</td>

            </Link>
            <td>{dao.category}</td>
            <td>${dao.AUM}</td>
            <td>{dao.numTwitterFollowers}</td>
            <td>{dao.date_founded}</td>
            <td><a href={dao.website_link}><FontAwesomeIcon icon={faGlobe} /></a></td>
            <td><a href={dao.social_media}><FontAwesomeIcon icon={faTwitter} /></a></td>
          </tr>
        )
      })
    }

    return (
      <div className="list row">
        <div className="col-md-8">
          <div>
            Number of DAOs <br />
            {daos.length} <br /> 
            from 84
          </div>
          <div>
            Total AUM (USD) <br />
            {totalAUM} <br /> 
            from $3,152M
          </div>
          <div>
            {renderCategory()}
          </div>
          <div className="input-group mb-3">


            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchFilter}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchFilter}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">

          <h4>Daos List</h4>


          <table >
            <thead>
              <tr>{renderHeader()}</tr>
            </thead>

            <tbody>
              {renderBody()}
            </tbody>

          </table>


        </div>

      </div>
    );
  }
}
