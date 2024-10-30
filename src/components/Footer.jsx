/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types, no-unused-vars
const Footer = ({ footerData: { titles, links } }) => {
  return (
    <>
      <footer className="bg-theme pt-7 pb-5 ">
        <div className="nike-container text-slate-200">
          <div
            className="grid items-start grid-cols-3 max-w-2xl w-full m-auto
          md:max-w-none md:gap-5
          "
          >
            {titles.map((val, i) => (
              <div key={i} className="grid items-center">
                <h1
                  className="text-lg lg:text-base md:text-sm uppercase font-semibold
                
                "
                >
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center gap-1">
                {list.map((val, i) => (
                  <li key={i} className="text-sm sm:text-sm">
                    {val.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright <sup className="text-base font-bold">&copy;</sup> All
              Rights Reserved 2024
              <span className="font-semibold pl-2">JSSTACK DEVELOPERS</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
