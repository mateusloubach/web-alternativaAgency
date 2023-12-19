import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Brasil" invert={invert}>
          Rua Funchal, 263 - Vila Olímpia
          <br />
          São Paulo - SP, 04551-060
        </Office>
      </li>
      <li>
        <Office name="Australia" invert={invert}>
          32-34 Bunn St
          <br />
          Sydney - NSW, 2009
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
