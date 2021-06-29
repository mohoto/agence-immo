/*Code source complet de la page d’administration */

import React from "react";
import { MDBContainer, MDBDataTableV5, MDBIcon, MDBView } from "mdbreact";
//import { AdminRoute } from "../../auth/adminRoutes";
import Moment from "react-moment";
import { priceFormatted } from "../components/Helpers";
//import useAuth from "../../auth/context";
import Image from 'next/image'
import {useGetProperties} from '../utilities/useRequest'


const PropertyList = () => {
  //const { user } = useAuth();
  const { properties, error } = useGetProperties();
  console.log('properties:', properties)

  const styles = {
    forcedInline: {
      display: "inline",
      width: "10px",
      height: "100px",
    },
    iconTrue: {
      color: "#2BBBAD",
    },
    iconFalse: {
      color: "red",
    },
  };

  const datatable = {
    columns: [
      {
        label: "Titre",
        field: "title",
        sort: "asc",
      },
      {
        label: "Catégorie",
        field: "category",
        sort: "asc",
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
      },
      {
        label: "Prix",
        field: "price",
        sort: "asc",
      },
      {
        label: "Image",
        field: "pictures",
        sort: "asc",
      },
      {
        label: "vendu",
        field: "sold",
        sort: "asc",
      },
      {
        label: "Vip",
        field: "vip",
        sort: "asc",
      },
      {
        label: "Date_de_creation",
        field: "createdAt",
        sort: "asc",
      },
      {
        label: "Actions",
        field: "action",
      },
    ],
    rows:
      properties &&
      properties.data.map((property) => {
        return {
          title: property.title,
          description: <div>{property.description.slice(0, 200)}</div>,
          price: priceFormatted(property.price),
          category: property.category.name,
          pictures: property && (
            {/* <MDBView hover zoom waves>
              <Image
                src={property.pictures[0]}
                alt="Premier slide"
                width={120}
                height={80}
              />
            </MDBView> */}
          ),
          sold:
            (property.sold === false && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-down" style={styles.iconFalse} />
              </div>
            )) ||
            (property.sold === true && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-up" style={styles.iconTrue} />
              </div>
            )),
          vip:
            (property.vip === false && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-down" style={styles.iconFalse} />
              </div>
            )) ||
            (property.vip === true && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-up" style={styles.iconTrue} />
              </div>
            )),
          createdAt: (
            <Moment format="DD/MM/YYYY à HH:mm:ss">{property.createdAt}</Moment>
          ),
          action: (
            <div>
              <div className="text-center">
                <MDBIcon far icon="eye" />
              </div>
            </div>
          ),
        };
      }),
  };

  return (
    <>
           
          <MDBContainer fluid>
            <MDBDataTableV5
              hover
              entriesOptions={[5, 10, 15, 20, 30]}
              entries={5}
              pagesAmount={4}
              data={datatable}
              pagingTop
              entriesLabel="Biens par page"
              infoLabel={["Affiche", "à", "de", "biens"]}
              searchTop
              searchBottom={false}
            />
          </MDBContainer>
     
    </>
  );
};

//export default AdminRoute(PropertyList);
export default PropertyList;