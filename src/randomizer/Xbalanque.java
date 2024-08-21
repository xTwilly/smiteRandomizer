package randomizer;

public class Xbalanque extends godClass{ 
    public Xbalanque() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Xbalanque test = new Xbalanque();
    System.out.println(test.getDamageType());
    }
}
