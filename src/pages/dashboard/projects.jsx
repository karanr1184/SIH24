import react from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";


  import { Link } from "react-router-dom";
  import {projectsData } from "@/data";

export function Projects() {
    return(<> 
        <div className="mt-3 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {projectsData.map(
                ({ img, title, description, tag, route, members }) => (
                  <Card key={title} className="p-3 border border-blue-gray-100">
                    <CardHeader
                      floated={false}
                      color="gray"
                      className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                    >
                      <img
                        src={img}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                    </CardHeader>
                    <CardBody className="py-0 px-1">
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {tag}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-1 mb-2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {description}
                      </Typography>
                    </CardBody>
                    <CardFooter className="mt-5 flex items-center justify-between py-0 px-1">
                      <Link to={route}>
                        <Button variant="outlined" size="sm">
                          view project
                        </Button>
                      </Link>
                      <Link to={route}>
                        <Button variant="outlined" size="sm">
                          Donate
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
    </>);
};

export default Projects;