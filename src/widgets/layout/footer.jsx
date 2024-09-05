import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 text-center">
      <div>
        <Typography variant="small" className="font-normal text-inherit">
          &copy; {year}, made with{" "} <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5 text-red-600" /> by Karan Rathod.
        </Typography>
      </div>
    </footer>
  );
}

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
