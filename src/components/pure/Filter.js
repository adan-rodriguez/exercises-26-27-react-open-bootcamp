function Filter({ children, applyFilter }) {
  return <button onClick={() => applyFilter(children)}>{children}</button>;
}

export default Filter;
