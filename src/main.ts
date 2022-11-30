import "./style.css";

type VDOMAttributes = { [key: string]: any };

interface VDOMElement {
  tagName: string;
  children?: VDOMNode[];
  props?: VDOMAttributes;
}

interface VDOMText {
  value: string;
}

type VDOMNode = VDOMElement | VDOMText;

const createVText = (value: VDOMText["value"]): VDOMText => ({ value });

const createVNode = (
  tagName: VDOMElement["tagName"],
  props?: VDOMElement["props"],
  children?: VDOMElement["children"]
): VDOMNode => {
  return {
    tagName,
    props,
    children,
  };
};

const vNode = createVNode("div", { class: "container" }, [
  createVNode("h1", {}, [createVText("Hello, Virtual DOM")]),
  createVNode("img", { src: "https://i.ibb.co/M6LdN5m/2.png", width: 200 }),
]);

document.querySelector<HTMLDivElement>("#app");
