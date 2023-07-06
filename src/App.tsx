import { Dropdown, DropdownTrigger, MenuItem } from "./components";

const menuItemsExample: MenuItem[] = [
  {
    icon: "share-2",
    label: "Поделиться в социальных сетях",
    onClick: () => console.log("share"),
  },
  {
    icon: "edit",
    label: "Редактировать страницу",
    onClick: () => console.log("edit"),
  },
  {
    icon: "trash-2",
    label: "Удалить страницу",
    onClick: () => console.log("delete"),
  },
];

export default function App() {
  return (
    <div
      style={{
        height: "300vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div style={{ height: "100vh", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <Dropdown
            menuItems={menuItemsExample}
            renderTrigger={(props) => <DropdownTrigger {...props} />}
          />
        </div>
        <div style={{ position: "absolute", bottom: "-100px", left: 0 }}>
          <Dropdown
            menuItems={menuItemsExample}
            renderTrigger={(props) => <DropdownTrigger {...props} />}
          />
        </div>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <Dropdown
            menuItems={menuItemsExample}
            renderTrigger={(props) => <DropdownTrigger {...props} />}
          />
        </div>
        <div style={{ position: "absolute", bottom: 0, right: 0 }}>
          <Dropdown
            menuItems={menuItemsExample}
            renderTrigger={(props) => <DropdownTrigger {...props} />}
          />
        </div>
        <div style={{ position: "absolute", bottom: "45%", right: "50%" }}>
          <Dropdown
            menuItems={menuItemsExample}
            renderTrigger={(props) => <DropdownTrigger {...props} />}
          />
        </div>
      </div>
    </div>
  );
}
