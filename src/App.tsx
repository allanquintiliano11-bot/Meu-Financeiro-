import { useState } from 'react';
import './App.css';

function App() {
  const [pagina, setPagina] = useState('Visão geral');

  const menu = [
    'Visão geral',
    'Lançamentos',
    'Contas bancárias',
    'Cartões',
    'Parcelamentos',
    'Categorias',
    'Metas financeiras',
    'Relatórios',
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">M</div>
          <div>
            <strong>Meu Financeiro</strong>
            <span>CONTROLE INTELIGENTE</span>
          </div>
        </div>

        <div className="menu-label">MENU PRINCIPAL</div>

        <nav>
          {menu.map((item, index) => (
            <button
              key={item}
              className={pagina === item ? 'menu-item active' : 'menu-item'}
              onClick={() => setPagina(item)}
            >
              <span>{['◫', '⇄', '▣', '▤', '▧', '◈', '◎', '▥'][index]}</span>
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="profile">
            <div className="avatar">A</div>
            <div>
              <strong>Minha conta</strong>
              <span>Área financeira</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <span className="breadcrumb">Meu Financeiro /</span>
            <strong>{pagina}</strong>
          </div>
          <div className="top-actions">
            <span className="period">Novembro de 2026</span>
            <div className="avatar">A</div>
          </div>
        </header>

        <section className="content">
          <div className="welcome">
            <div>
              <h1>{pagina === 'Visão geral' ? 'Visão geral' : pagina}</h1>
              <p>Acompanhe e organize sua vida financeira.</p>
            </div>
            <button className="primary-button">+ Novo lançamento</button>
          </div>

          {pagina === 'Visão geral' ? (
            <>
              <div className="summary-grid">
                <div className="summary-card">
                  <span>Saldo total</span>
                  <strong>R$ 0,00</strong>
                  <small>Consolidado de suas contas</small>
                </div>
                <div className="summary-card">
                  <span>Receitas do mês</span>
                  <strong className="green">R$ 0,00</strong>
                  <small>Entradas registradas</small>
                </div>
                <div className="summary-card">
                  <span>Despesas do mês</span>
                  <strong className="red">R$ 0,00</strong>
                  <small>Saídas registradas</small>
                </div>
                <div className="summary-card">
                  <span>Economia do mês</span>
                  <strong>R$ 0,00</strong>
                  <small>Receitas menos despesas</small>
                </div>
              </div>

              <div className="panels">
                <section className="panel">
                  <div className="panel-heading">
                    <div>
                      <h2>Movimentação financeira</h2>
                      <p>Resumo das receitas e despesas</p>
                    </div>
                    <span className="tag">Este mês</span>
                  </div>
                  <div className="empty-chart">
                    <div className="chart-symbol">▥</div>
                    <strong>Nenhuma movimentação ainda</strong>
                    <p>
                      Seus dados aparecerão aqui quando você cadastrar
                      lançamentos.
                    </p>
                  </div>
                </section>

                <section className="panel">
                  <div className="panel-heading">
                    <div>
                      <h2>Despesas por categoria</h2>
                      <p>Distribuição dos seus gastos</p>
                    </div>
                  </div>
                  <div className="empty-chart">
                    <div className="chart-symbol">◉</div>
                    <strong>Sem despesas cadastradas</strong>
                    <p>As categorias serão exibidas neste espaço.</p>
                  </div>
                </section>
              </div>

              <section className="panel transactions">
                <div className="panel-heading">
                  <div>
                    <h2>Últimos lançamentos</h2>
                    <p>Suas movimentações mais recentes</p>
                  </div>
                  <button
                    className="text-button"
                    onClick={() => setPagina('Lançamentos')}
                  >
                    Ver todos
                  </button>
                </div>
                <div className="empty-transactions">
                  Seus lançamentos aparecerão aqui.
                </div>
              </section>
            </>
          ) : (
            <section className="panel page-placeholder">
              <div className="chart-symbol">◫</div>
              <h2>{pagina}</h2>
              <p>Esta área será desenvolvida na próxima etapa.</p>
            </section>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
