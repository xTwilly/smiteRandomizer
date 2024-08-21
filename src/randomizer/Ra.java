package randomizer;

public class Ra extends godClass{ 
    public Ra() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Ra test = new Ra();
    System.out.println(test.getDamageType());
    }
}
