import "./NavItem.css";

export default function NavItem({ children, classname, onClick, sectionRef }) {
  return (
    <li className={classname} onClick={() => onClick(sectionRef)}>
      {children}
    </li>
  );
}
