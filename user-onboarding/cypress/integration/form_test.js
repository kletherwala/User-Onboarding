describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234');
    })

    const textInput = () => cy.get('input[name=text]');
    const authorInput = () => cy.get('input[name=author]');
    const foobarInput = () => cy.get('input[name=foobar]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');
    const cancelBtn = () => cy.get('button[id="cancelBtn"]');

    it('sanity check to make sure tests work', () => {
     
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); 
    })    
})