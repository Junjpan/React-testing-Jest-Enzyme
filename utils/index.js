export const findByTestAttr=(component,attr)=>{
    const wrapper=component.find(`[data-test='${attr}']`);
    console.log(wrapper.debug())
    return wrapper
}