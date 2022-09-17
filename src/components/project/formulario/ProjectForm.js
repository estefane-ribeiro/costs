import Input from '../../form/Input'
import Select from '../../form/Select'
import Submit from '../../form/Submit'
import styles from './ProjectForm.module.css'

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text={'Nome do projeto'}
        placeholder={'Insira o nome do projeto:'}
        name={'nomeProjeto'}
      />

      <Input
        type="number"
        text={'Orçamento do produto'}
        placeholder={'Insira o orçamento total do projeto:'}
        name={'budget'}
      />

      <Select
        name="category_id"
        text="Selecione uma categoria"
        id="category_id"
      />
      <Submit text={btnText} />
    </form>
  )
}

export default ProjectForm
