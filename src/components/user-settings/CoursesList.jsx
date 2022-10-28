import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import { Button, Card, Layout, List, Modal, Input } from "antd";
import CourseRegister from "./CourseRegister";

const { Content } = Layout;
const { Search } = Input;

export default function CoursesList() {
  const getCursos = useStoreActions((actions) => actions.adm.getCursos);
  const getCoursesInfoRelated = useStoreActions(
    (actions) => actions.adm.getCoursesInfoRelated
  );

  const [registerVisible, setRegisterVisible] = useState(false);

  const loading = useStoreState((state) => state.adm.loading);
  const cursos = useStoreState((state) => state.adm.cursos);

  const [editandoCurso, setEditandoCurso] = useState({});
  const [modalText, setModalText] = useState("Cadastrar Curso");

  useEffect(() => {
    getCursos();
    getCoursesInfoRelated();
  }, [getCursos]);

  return (
    <>
      <Layout
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <Content style={{ width: "100%" }}>
          <Card
            title={"Cursos"}
            extra={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "450px",
                }}
              >
                <Search
                  allowClear
                  onSearch={(e) => {
                    getCursos({ query: e });
                  }}
                  style={{
                    marginRight: "30px",
                  }}
                  placeholder={"Buscar cursos"}
                />
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    //setEditandoCurso({});
                    //setModalText("Cadastrar Curso");
                    //setRegisterVisible(true);
                  }}
                >
                  Adicionar
                </Button>
              </div>
            }
          >
            <List
              loading={loading}
              dataSource={cursos}
              style={{ width: "100%" }}
              renderItem={(item) => {
                return (
                  <List.Item
                    actions={[
                      <Button
                        key={item.id}
                        onClick={() => {
                          //setEditandoCurso(item);
                          //setModalText("Alterar Curso");
                          //setRegisterVisible(true);
                        }}
                        icon={<EditOutlined />}
                      >
                        Editar
                      </Button>,
                    ]}
                    key={item.id}
                  >
                    <List.Item.Meta
                      style={{ fontFamily: "Roboto" }}
                      title={item.name}
                      description={
                        <>
                          {item.institutions.map((inst) => (
                            <span key={inst.id}>{inst.name}</span>
                          ))}
                        </>
                      }
                    />
                  </List.Item>
                );
              }}
            />
          </Card>
          <Modal
            title={modalText}
            open={registerVisible}
            destroyOnClose={true}
            onCancel={() => {
              getCursos();
              setEditandoCurso({});
              setModalText("Cadastrar Curso");
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getCursos();
                  setEditandoCurso({});
                  setModalText("Cadastrar Curso");
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <CourseRegister
              curso={editandoCurso}
              actionVisible={() => {
                setRegisterVisible(false);
                getCursos();
              }}
            />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
