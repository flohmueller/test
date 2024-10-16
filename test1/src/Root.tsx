import { Flex, Form, Input } from "antd";

function Root() {
  const { name, updateName } = useContext(NameContext);

  return (
    <Flex vertical>
      {name !== "" ? <div>Hello {name}!</div> : null}
      <Form>
        <Form.Item label="Name">
          <Input onChange={(e) => updateName(e.target.value)}></Input>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default Root;
