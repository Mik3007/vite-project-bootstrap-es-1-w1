import { fireEvent, render, screen } from '@testing-library/react';
import Welcome from './components/Welcome';
import { expect, test } from 'vitest';
import App from './App';


//1.Verifica che il componente Welcome venga montato correttamente.

test('Cerca titolo Welcome', async() => {
    render(<Welcome/>)

    const titlePage = screen.getByText(/Un libro per ogni viaggio/i)
    expect(titlePage).toBeInTheDocument();
})

//2.Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.

test('Verifica che renderizzi 150 card', async() => {
    render(<App/>)

    const totalCard = await screen.findAllByTestId('card-book')
    expect(totalCard).toHaveLength(150);
})

//3.Verifica che il componente CommentArea venga renderizzato correttamente.

test('Controlla se al click sulla card renderizza CommentArea', async() => {
    render(<App/>)

    const book = await screen.findByText("The Silent Corner: A Novel of Suspense (Jane Hawk)")

    fireEvent.click(book);

    const comment = screen.getByText("Add Comment")
    expect(comment).toBeInTheDocument();
})

//4.Verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto

test("filtra gli utenti in base alla ricerca", async () => {
    
    render(<App />);
  
    const search = screen.getByPlaceholderText(/Ricerca il tuo libro.../i);

    fireEvent.change(search, { target: { value: "the silent" } });
  
    const result = await screen.findAllByTestId('card-book')
  
    expect(result).toHaveLength(1);
  
    expect(screen.getByText("The Silent Corner: A Novel of Suspense (Jane Hawk)")).toBeInTheDocument();
  });

//5. Verifica che, cliccando su un libro, il suo bordo cambi colore

test("seleziona un utente al click", async () => {
    render(<App />);
    const cardColor = await screen.findByText("The Silent Corner: A Novel of Suspense (Jane Hawk)");
  
    fireEvent.click(cardColor.closest('.card'));
  
    expect(cardColor.closest('.card')).toHaveClass('card-selected');
  });

//6.Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale

test("controllo per avere solo una card con il bordo colorato", async () => {
    render(<App />);
  
    const bookItem1 = await screen.findByText("The Silent Corner: A Novel of Suspense (Jane Hawk)");
    const bookItem2 = await screen.findByText("Celtic Empire (Dirk Pitt Adventure)");

    fireEvent.click(bookItem1);
    expect(bookItem1.closest('.card')).toHaveClass('card-selected');

    fireEvent.click(bookItem2);
    expect(bookItem2.closest('.card')).toHaveClass('card-selected');
  
    expect(bookItem1.closest('.card')).not.toHaveClass('card-selected');
  });

//7.Verifica che all'avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all'interno del DOM.

test('controlliamo che prima del carico non ci sia nessun commento visibile', async () => {
    render(<App/>)

    const commento = screen.queryAllByAltText('add comment')
    expect(commento.length).toBe(0);
})

//8.Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all'interno del DOM.

test('Verifica che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all\'interno del DOM', async () => {
    render(<App />);
  
    const book = await screen.findByText('The Silent Corner: A Novel of Suspense (Jane Hawk)');
    fireEvent.click(book);
  
    const comments = screen.getByText('Reviews');
    expect(comments).toBeInTheDocument();
  });


