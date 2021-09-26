import { Grid } from "@material-ui/core";
import Image from "next/image";
import LinkedInIcon from "../../assets/images/linkedin1.png";
import GoogleScholarsIcon from "../../assets/images/google-scholar.png";

const AlumniCard = ({ name, thumbnail, position, profile, about, email }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <div className="flex justify-center">
          <div
            style={{ width: 120, height: 122 }}
            className="bg-silver-600"
          ></div>
        </div>
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <p className="font-inter-medium text-xl ">{name}</p>
          </Grid>
          <Grid item xs={6}>
            <div className="flex space-x-4 justify-end">
              {Object.keys(profile).map((item, id) => {
                return (
                  <a
                    key={id}
                    href={profile[item]}
                    onClick={(e) => handleActions(e, profile[item])}
                  >
                    <Image
                      src={
                        item === "linkedin"
                          ? LinkedInIcon
                          : item === "scholar"
                          ? GoogleScholarsIcon
                          : null
                      }
                      alt={name}
                      layout="fixed"
                    />
                  </a>
                );
              })}
            </div>
          </Grid>
          <Grid item xs={12}>
            <p className="text-lg">{position}</p>
          </Grid>
          {email ? (
            <Grid item xs={12}>
              <p className="text-lg">{email}</p>
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <p className="text-lg text-shark-400">{about}</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AlumniCard;
