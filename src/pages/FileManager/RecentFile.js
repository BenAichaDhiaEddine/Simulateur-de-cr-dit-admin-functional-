import React, { Component } from "react"
import { Link } from "react-router-dom"
import {
  Table,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap"

export default class RecentFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recentfile: [
        {
          id: 1,
          icon:
            "mdi mdi-file-document font-size-16 align-middle text-primary mr-2",
          file: "index.html",
          date: "12-10-2020, 09:45",
          size: "09",
        },
        {
          id: 2,
          icon:
            "mdi mdi-folder-zip font-size-16 align-middle text-warning mr-2",
          file: "Project-A.zip",
          date: "11-10-2020, 17:05",
          size: "115",
        },
        {
          id: 3,
          icon: "mdi mdi-image ",
          file: "Img-1.jpeg",
          date: "11-10-2020, 13:26",
          size: "86",
        },
        {
          id: 4,
          icon: "mdi mdi-text-box font-size-16 align-middle text-muted mr-2",
          file: "update list.txt",
          date: "10-10-2020, 11:32",
          size: "08",
        },
        {
          id: 5,
          icon: "mdi mdi-folder font-size-16 align-middle text-warning mr-2",
          file: "Project B",
          date: "10-10-2020, 10:51",
          size: "72",
        },
        {
          id: 6,
          icon: "mdi mdi-text-box font-size-16 align-middle text-muted mr-2",
          file: "Changes list.txt",
          date: "09-10-2020, 17:05",
          size: "07",
        },
        {
          id: 7,
          icon: "mdi mdi-image font-size-16 align-middle text-success mr-2",
          file: "Img-2.png",
          date: "09-10-2020, 15:12",
          size: "31",
        },
        {
          id: 8,
          icon: "mdi mdi-folder font-size-16 align-middle text-warning mr-2",
          file: "Project C",
          date: "09-10-2020, 10:11",
          size: "20",
        },
        {
          id: 9,
          icon: "bx bxs-file font-size-16 align-middle text-primary mr-2",
          file: "starter-page.html",
          date: "08-10-2020, 03:22",
          size: "11",
        },
      ],
    }
  }
  render() {
    return (
      <React.Fragment>
        <hr/>
        <div className="">
          <div className="d-flex mb-3 flex-wrap">
            <h5 className="font-size-14 mr-3">ملفات حديثة</h5>

            <div className="ml-auto">
              <Link to="#">إخفاء</Link>
            </div>
          </div>


          <div className="table-responsive file-manager">
            <Table className="table table-centered table-nowrap table-hover mb-0">
              <thead>
                <tr>
                  <th scope="col">الاسم</th>
                  <th scope="col">التاريخ</th>
                  <th scope="col" colSpan="2">
                    حجم
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.recentfile.map((recentfile, key) => (
                  <tr key={key}>
                    <td>
                      <Link to="#" className="text-dark ">
                        <i className={recentfile.icon}></i> {recentfile.file}
                      </Link>
                    </td>
                    <td>{recentfile.date}</td>
                    <td className="bx">{recentfile.size} KB</td>
                    <td>
                      <UncontrolledDropdown className="mb-2">
                        <DropdownToggle
                          color="white"
                          className="btn font-size-16 btn-link text-muted mt-n2"
                        >
                          <i className="mdi mdi-dots-horizontal"></i>
                        </DropdownToggle>

                        <DropdownMenu direction="right">
                          <Link className="dropdown-item" to="#">
                            فتح
                          </Link>
                          <Link className="dropdown-item" to="#">
                            تحميل
                          </Link>
                          <Link className="dropdown-item" to="#">
                            تسمية
                          </Link>
                          <div className="dropdown-divider"></div>
                          <Link className="dropdown-item" to="#">
                            مسح
                          </Link>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
