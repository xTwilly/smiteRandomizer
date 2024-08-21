package randomizer;

public class Charybdis extends godClass{ 
    public Charybdis() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Charybdis test = new Charybdis();
    System.out.println(test.getDamageType());
    }
}
